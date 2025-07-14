import React, { useState, useContext } from "react";
import { IconButton, Menu, MenuItem, Divider, ListItemIcon, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const MoreMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    logout();
    handleClose();
    navigate("/");
  };

  return (
    <>
      <IconButton color="primary" onClick={handleMenu} sx={{ ml: 1 }}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {user && [
          <MenuItem component={Link} to="/profile" onClick={handleClose} key="profile">
            <ListItemIcon><AccountCircleIcon fontSize="small" /></ListItemIcon>
            Profile
          </MenuItem>,
        ]}
        <MenuItem component={Link} to="/orders" onClick={handleClose}>
          <ListItemIcon><HistoryIcon fontSize="small" /></ListItemIcon>
          Order History
        </MenuItem>
        <MenuItem component={Link} to="/settings" onClick={handleClose}>
          <ListItemIcon><SettingsIcon fontSize="small" /></ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        {user ? (
          <MenuItem onClick={handleLogout}>
            <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
            Logout
          </MenuItem>
        ) : (
          <MenuItem component={Link} to="/login" onClick={handleClose}>
            <ListItemIcon><LoginIcon fontSize="small" /></ListItemIcon>
            Login / Register
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default MoreMenu; 