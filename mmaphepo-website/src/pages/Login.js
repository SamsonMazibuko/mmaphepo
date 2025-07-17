import React, { useState, useContext } from "react";
import { Box, Paper, Typography, TextField, Button, Stack, Alert, Link as MuiLink, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, register, forgotPassword } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotMsg, setForgotMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError(''); setSuccess('');
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    if (isLogin) {
      const res = await login(form.email, form.password);
      if (!res.success) setError(res.message);
      else navigate('/');
    } else {
      const res = await register(form.email, form.password);
      if (!res.success) setError(res.message);
      else setSuccess(res.message);
    }
  };

  const handleForgot = async () => {
    setForgotMsg('');
    if (!forgotEmail) return setForgotMsg('Enter your email.');
    const res = await forgotPassword(forgotEmail);
    setForgotMsg(res.message);
  };

  return (
    <Box sx={{ mt: 6, maxWidth: 400, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>{isLogin ? 'Login' : 'Register'}</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField label="Email" name="email" value={form.email} onChange={handleChange} required fullWidth type="email" />
            <TextField label="Password" name="password" value={form.password} onChange={handleChange} required fullWidth type="password" />
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
            <Button type="submit" variant="contained" color="primary" size="large">{isLogin ? 'Login' : 'Register'}</Button>
            {isLogin && <MuiLink component="button" onClick={() => setForgotOpen(true)} sx={{ textAlign: 'right' }}>Forgot password?</MuiLink>}
          </Stack>
        </form>
        <Typography sx={{ mt: 2 }}>
          {isLogin ? (
            <>Don't have an account? <MuiLink component="button" onClick={() => setIsLogin(false)}>Register</MuiLink></>
          ) : (
            <>Already have an account? <MuiLink component="button" onClick={() => setIsLogin(true)}>Login</MuiLink></>
          )}
        </Typography>
      </Paper>
      <Dialog open={forgotOpen} onClose={() => setForgotOpen(false)}>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogContent>
          <TextField label="Email" value={forgotEmail} onChange={e => setForgotEmail(e.target.value)} fullWidth sx={{ mt: 1 }} />
          {forgotMsg && <Alert severity="info" sx={{ mt: 2 }}>{forgotMsg}</Alert>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setForgotOpen(false)}>Close</Button>
          <Button onClick={handleForgot} variant="contained">Send Reset Link</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Login; 