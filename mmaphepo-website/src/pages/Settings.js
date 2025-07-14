import React, { useContext } from "react";
import { AuthContext } from "../App";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <Box sx={{ mt: 6, maxWidth: 400, mx: 'auto' }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>Settings</Typography>
          <Typography>Please <Button onClick={() => navigate('/login')}>login</Button> to access settings.</Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 6, maxWidth: 400, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Settings</Typography>
        <Typography>Settings will be available soon.</Typography>
      </Paper>
    </Box>
  );
};

export default Settings; 