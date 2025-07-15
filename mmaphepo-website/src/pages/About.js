import React from "react";
import { Box, Typography, Paper, Grid, Avatar, Stack, Divider, Card, CardContent, Container } from "@mui/material";
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { companyLogo } from "../data/products";

const team = [
  { name: "Mpho Mazibuko", role: "Founder & CEO", avatar: "/images/slide_23_img_8.png" },
  { name: "Thandi Nkosi", role: "Operations Manager", avatar: "/images/slide_24_img_14.png" },
  { name: "Sipho Ndlovu", role: "Lead Engineer", avatar: "/images/slide_24_img_16.png" },
];

const timeline = [
  { year: "2015", event: "Company founded in Randfontein, Gauteng." },
  { year: "2017", event: "Expanded into mining and construction supply." },
  { year: "2020", event: "Launched new product lines in petrochemicals and agriculture." },
  { year: "2023", event: "Recognized for excellence in industrial solutions." },
];

const About = () => (
  <Container maxWidth="lg" className="section-bg" sx={{ mt: 4, mb: 8, py: 6, borderRadius: 3 }}>
    {/* Header with Logo and Intro */}
    <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4 }}>
      <Avatar src={companyLogo} alt="Logo" sx={{ width: 80, height: 80, boxShadow: 2, bgcolor: '#fff' }} />
      <Box>
        <Typography variant="h3" fontWeight={700} color="primary" gutterBottom>Mmaphepo Holdings</Typography>
        <Typography variant="h6" color="text.secondary">Mining, Industrial & Engineering Solutions</Typography>
      </Box>
    </Stack>
    {/* Main Content */}
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Paper elevation={2} className="card-shadow section-alt" sx={{ p: 3, height: '100%' }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>Who We Are</Typography>
          <Typography variant="body1" paragraph>
            Mmaphepo Holdings is dedicated to providing value-engineered solutions and minimizing downtime for our clients. We serve a wide range of industries including mining, construction, agriculture, and petrochemicals. Our commitment is to deliver excellence, quality, and reliability in every project and product.
          </Typography>
          <Typography variant="body1" paragraph>
            With a focus on sustainable growth and customer satisfaction, we have become a trusted partner for businesses across South Africa.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={2} className="card-shadow section-alt" sx={{ p: 3, height: '100%' }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>Our Mission</Typography>
          <Typography variant="body2" paragraph>
            To provide a service that will add sustainable, value-engineered solutions to the operation of our clients in commerce, industry, and the public sector. We strive to understand our clients’ needs and to deliver service excellence with uncompromising passion and quality.
          </Typography>
          <Typography variant="h5" fontWeight={700} gutterBottom>Our Vision</Typography>
          <Typography variant="body2" paragraph>
            To be the Mining and Infrastructure Specialists of choice in the markets we serve.
          </Typography>
          <Typography variant="h5" fontWeight={700} gutterBottom>Core Values</Typography>
          <Typography variant="body2">
            Excellence, Passion and Quality, Employee Development and Advancement, Customer Focus, Leadership, Solutions Oriented, Health, Safety & Environment, Social Responsibility
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    {/* Timeline Section */}
    <Box className="section-bg" sx={{ mt: 6, mb: 4, py: 6, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
        <TimelineIcon sx={{ mb: -0.5, mr: 1 }} /> Our Story
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" alignItems="flex-start">
        {timeline.map((item, idx) => (
          <Card key={idx} className="card-shadow section-alt" sx={{ minWidth: 200, flex: 1, mx: 1, bgcolor: '#fff' }}>
            <CardContent>
              <Typography variant="h6" color="primary" fontWeight={700}>{item.year}</Typography>
              <Typography variant="body2">{item.event}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
    {/* Contact Info */}
    <Box className="section-alt card-shadow" sx={{ mt: 6, py: 6, borderRadius: 3 }}>
      <Paper elevation={3} sx={{ p: 4, bgcolor: 'transparent', boxShadow: 'none' }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>Contact Us</Typography>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnIcon color="primary" />
            <Typography variant="body1">2 Darter Road, Ze Bali Security Lodge, Greenhills, Randfontein, 1759</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon color="primary" />
            <Typography variant="body1">073 566 2161</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon color="primary" />
            <Typography variant="body1">info@mmaphepo.co.za</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  </Container>
);

export default About; 