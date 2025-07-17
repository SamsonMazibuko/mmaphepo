import React, { useEffect, useState, useContext } from 'react';
import { Box, Paper, Typography, CircularProgress, Alert, Button } from '@mui/material';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const { verifyEmail } = useContext(AuthContext);
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setStatus('error');
      setMessage('No token provided.');
      return;
    }
    verifyEmail(token).then(res => {
      if (res.success) {
        setStatus('success');
        setMessage(res.message);
      } else {
        setStatus('error');
        setMessage(res.message);
      }
    });
  }, [searchParams, verifyEmail]);

  return (
    <Box sx={{ mt: 6, maxWidth: 400, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Email Verification</Typography>
        {status === 'loading' && <CircularProgress />}
        {status !== 'loading' && <Alert severity={status}>{message}</Alert>}
        {status === 'success' && <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/login')}>Go to Login</Button>}
      </Paper>
    </Box>
  );
};

export default VerifyEmail; 