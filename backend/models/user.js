const db = require('../db');

const createUser = (email, passwordHash, verificationToken) => {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO users (email, password, isVerified, verificationToken, verificationTokenCreatedAt) VALUES (?, ?, ?, ?, ?)',
      [email, passwordHash, false, verificationToken, new Date().toISOString()],
      function (err) {
        if (err) return reject(err);
        resolve(this.lastID);
      }
    );
  });
};

const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

const findUserByVerificationToken = (token) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE verificationToken = ?', [token], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

const verifyUser = (userId) => {
  return new Promise((resolve, reject) => {
    db.run('UPDATE users SET isVerified = ?, verificationToken = NULL WHERE id = ?', [true, userId], function (err) {
      if (err) return reject(err);
      resolve();
    });
  });
};

const setResetToken = (userId, resetToken) => {
  return new Promise((resolve, reject) => {
    db.run('UPDATE users SET resetToken = ? WHERE id = ?', [resetToken, userId], function (err) {
      if (err) return reject(err);
      resolve();
    });
  });
};

const findUserByResetToken = (token) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE resetToken = ?', [token], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

const updatePassword = (userId, passwordHash) => {
  return new Promise((resolve, reject) => {
    db.run('UPDATE users SET password = ?, resetToken = NULL WHERE id = ?', [passwordHash, userId], function (err) {
      if (err) return reject(err);
      resolve();
    });
  });
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByVerificationToken,
  verifyUser,
  setResetToken,
  findUserByResetToken,
  updatePassword,
}; 