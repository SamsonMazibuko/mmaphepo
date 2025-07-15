import React from "react";
import { Box, Typography, Stack, IconButton, Link as MuiLink, Divider, Container, Avatar } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from "react-router-dom";
import { companyLogo } from "../data/products";

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#222', color: '#fff', mt: 8, pt: 6, pb: 3 }}>
    <Container maxWidth="lg">
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} justifyContent="space-between" alignItems="flex-start">
        {/* Logo & Company Info */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: { xs: 2, md: 0 } }}>
          <Avatar src={companyLogo} alt="Logo" sx={{ width: 56, height: 56, bgcolor: '#fff' }} />
          <Box>
            <Typography variant="h6" fontWeight={700} color="primary.main">Mmaphepo Holdings</Typography>
            <Typography variant="body2" color="grey.300">Mining, Industrial & Engineering Solutions</Typography>
          </Box>
        </Stack>
        {/* Quick Links */}
        <Box>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>Quick Links</Typography>
          <Stack spacing={1}>
            <MuiLink component={Link} to="/" color="inherit" underline="hover">Home</MuiLink>
            <MuiLink component={Link} to="/shop" color="inherit" underline="hover">Shop</MuiLink>
            <MuiLink component={Link} to="/about" color="inherit" underline="hover">About</MuiLink>
          </Stack>
        </Box>
        {/* Contact Info */}
        <Box>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>Contact Us</Typography>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">2 Darter Road, Ze Bali Security Lodge, Greenhills, Randfontein, 1759</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">073 566 2161</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon fontSize="small" />
              <Typography variant="body2">info@mmaphepo.co.za</Typography>
            </Stack>
          </Stack>
        </Box>
        {/* Social Media */}
        <Box>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>Follow Us</Typography>
          <Stack direction="row" spacing={1}>
            <IconButton color="primary" href="#" sx={{ bgcolor: '#fff', '&:hover': { bgcolor: 'primary.light' } }}><LinkedInIcon /></IconButton>
          </Stack>
        </Box>
      </Stack>
      <Divider sx={{ my: 3, borderColor: 'grey.800' }} />
      <Typography variant="body2" align="center" color="grey.400">
        &copy; {new Date().getFullYear()} Mmaphepo Holdings. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer; 