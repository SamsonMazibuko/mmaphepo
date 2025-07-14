import React, { useState, useContext } from "react";
import { Box, Paper, Typography, TextField, Button, Stack, Alert, Link as MuiLink } from "@mui/material";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, register } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.email || !form.password || (!isLogin && !form.name)) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    if (isLogin) {
      login(form.email, form.password);
    } else {
      register(form.email, form.password, form.name);
    }
    navigate('/');
  };

  return (
    <Box sx={{ mt: 6, maxWidth: 400, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>{isLogin ? 'Login' : 'Register'}</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {!isLogin && (
              <TextField label="Name" name="name" value={form.name} onChange={handleChange} required fullWidth />
            )}
            <TextField label="Email" name="email" value={form.email} onChange={handleChange} required fullWidth type="email" />
            <TextField label="Password" name="password" value={form.password} onChange={handleChange} required fullWidth type="password" />
            {error && <Alert severity="error">{error}</Alert>}
            <Button type="submit" variant="contained" color="primary" size="large">{isLogin ? 'Login' : 'Register'}</Button>
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
    </Box>
  );
};

export default Login; 