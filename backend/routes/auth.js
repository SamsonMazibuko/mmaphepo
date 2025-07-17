const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const {
  createUser,
  findUserByEmail,
  findUserByVerificationToken,
  verifyUser,
  setResetToken,
  findUserByResetToken,
  updatePassword,
} = require('../models/user');

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await findUserByEmail(email);
    if (existing) return res.status(400).json({ message: 'Email already registered.' });
    const passwordHash = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');
    await createUser(email, passwordHash, verificationToken);
    const verifyUrl = `${process.env.CLIENT_URL}/verify?token=${verificationToken}`;
    await transporter.sendMail({
      from: `Mmaphepo <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Verify your email',
      html: `<p>Click <a href=\"${verifyUrl}\">here</a> to verify your email.</p>`
    });
    res.json({ message: 'Registration successful. Please check your email to verify your account.' });
  } catch (err) {
    console.error('REGISTER ERROR:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Email verification endpoint
router.get('/verify', async (req, res) => {
  try {
    const { token } = req.query;
    const user = await findUserByVerificationToken(token);
    if (!user) return res.status(400).json({ message: 'Invalid or expired token.' });
    // Check if token is older than 5 minutes
    const createdAt = new Date(user.verificationTokenCreatedAt);
    const now = new Date();
    const diffMs = now - createdAt;
    const diffMins = diffMs / (1000 * 60);
    if (diffMins > 5) {
      return res.status(400).json({ message: 'Verification token has expired. Please register again.' });
    }
    await verifyUser(user.id);
    res.json({ message: 'Email verified. You can now log in.' });
  } catch (err) {
    console.error('VERIFY ERROR:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ message: 'Invalid credentials.' });
    if (!user.isVerified) return res.status(403).json({ message: 'Please verify your email first.' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials.' });
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    console.error('LOGIN ERROR:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Forgot password endpoint
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await findUserByEmail(email);
    if (!user) return res.status(200).json({ message: 'If that email exists, a reset link has been sent.' });
    const resetToken = crypto.randomBytes(32).toString('hex');
    await setResetToken(user.id, resetToken);
    const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;
    await transporter.sendMail({
      from: `Mmaphepo <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Reset your password',
      html: `<p>Click <a href=\"${resetUrl}\">here</a> to reset your password.</p>`
    });
    res.json({ message: 'If that email exists, a reset link has been sent.' });
  } catch (err) {
    console.error('FORGOT PASSWORD ERROR:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Reset password endpoint
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;
    const user = await findUserByResetToken(token);
    if (!user) return res.status(400).json({ message: 'Invalid or expired token.' });
    const passwordHash = await bcrypt.hash(password, 10);
    await updatePassword(user.id, passwordHash);
    res.json({ message: 'Password updated. You can now log in.' });
  } catch (err) {
    console.error('RESET PASSWORD ERROR:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router; 