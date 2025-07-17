import React, { useState, useContext } from 'react';
import { Box, Paper, Typography, TextField, Button, Alert } from '@mui/material';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const { resetPassword } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError(''); setSuccess('');
    if (!password || !confirm) return setError('Please fill in all fields.');
    if (password !== confirm) return setError('Passwords do not match.');
    const token = searchParams.get('token');
    if (!token) return setError('No token provided.');
    const res = await resetPassword(token, password);
    if (res.success) setSuccess(res.message);
    else setError(res.message);
  };

  return (
    <Box sx={{ mt: 6, maxWidth: 400, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Reset Password</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="New Password" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth sx={{ mt: 2 }} />
          <TextField label="Confirm Password" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} fullWidth sx={{ mt: 2 }} />
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>Reset Password</Button>
        </form>
        {success && <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate('/login')}>Go to Login</Button>}
      </Paper>
    </Box>
  );
};

export default ResetPassword; 