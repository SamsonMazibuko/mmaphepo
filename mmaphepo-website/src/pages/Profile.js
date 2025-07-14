import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { Box, Paper, Typography, TextField, Button, Stack, Alert, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OrderHistory from "./OrderHistory";
import Settings from "./Settings";

const Profile = () => {
  const { user, register } = useContext(AuthContext);
  const [name, setName] = useState(user ? user.name : '');
  const [success, setSuccess] = useState(false);
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  if (!user) {
    return (
      <Box sx={{ mt: 6, maxWidth: 400, mx: 'auto' }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>Profile</Typography>
          <Typography>Please <Button onClick={() => navigate('/login')}>login</Button> to view your profile.</Typography>
        </Paper>
      </Box>
    );
  }

  const handleSave = () => {
    register(user.email, 'dummy', name); // update name only
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <Box sx={{ mt: 6, maxWidth: 600, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>My Account</Typography>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 3 }}>
          <Tab label="Account" />
          <Tab label="Order History" />
          <Tab label="Settings" />
        </Tabs>
        {tab === 0 && (
          <Stack spacing={2}>
            <TextField label="Email" value={user.email} disabled fullWidth />
            <TextField label="Name" value={name} onChange={e => setName(e.target.value)} fullWidth />
            {success && <Alert severity="success">Profile updated!</Alert>}
            <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
          </Stack>
        )}
        {tab === 1 && <OrderHistory />}
        {tab === 2 && <Settings />}
      </Paper>
    </Box>
  );
};

export default Profile; 