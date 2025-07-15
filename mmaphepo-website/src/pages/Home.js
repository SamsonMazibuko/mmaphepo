import React from "react";
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, Paper, Avatar, Stack, Container } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { companyLogo, default as products } from "../data/products";

const heroBg = "/images/slide_26_img_3.png"; // Use a visually strong image for hero
const featured = products.slice(0, 3);

const testimonials = [
  {
    name: "Thabo M.",
    quote: "Mmaphepo Holdings exceeded our expectations with their professionalism and quality products!",
    avatar: "/images/slide_23_img_14.png"
  },
  {
    name: "Lerato P.",
    quote: "Fast delivery and excellent customer service. Highly recommended!",
    avatar: "/images/slide_24_img_11.png"
  },
  {
    name: "Sipho N.",
    quote: "Their solutions helped us minimize downtime and improve efficiency.",
    avatar: "/images/slide_24_img_16.png"
  }
];

const Home = () => (
  <Box className="section-bg" sx={{ pb: 8 }}>
    {/* Hero Section */}
    <Box sx={{
      minHeight: { xs: 350, md: 420 },
      background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)), url(${heroBg}) center/cover no-repeat`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      borderRadius: 3,
      mb: 6,
      position: 'relative',
      boxShadow: 3
    }}>
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 6 }}>
        <Avatar src={companyLogo} alt="Logo" sx={{ width: 64, height: 64, mx: 'auto', mb: 2, boxShadow: 2, bgcolor: '#fff' }} />
        <Typography variant="h3" fontWeight={700} sx={{ letterSpacing: 1, mb: 1, textShadow: '0 2px 8px #0008', fontSize: { xs: '2rem', md: '2.5rem' } }}>
          Mmaphepo Holdings
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, textShadow: '0 1px 6px #0007', fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
          Your Partner in Industrial, Mining, and Engineering Solutions
        </Typography>
        <Button variant="contained" color="primary" size="large" href="/shop" sx={{ fontWeight: 600, px: 4, py: 1, fontSize: '1rem', borderRadius: 8 }}>
          Shop Now
        </Button>
      </Container>
    </Box>

    {/* Why Choose Us */}
    <Box className="section-alt" sx={{ py: 5, borderRadius: 3, mb: 6 }}>
      <Typography variant="h5" align="center" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '1.3rem', md: '1.6rem' } }}>Why Choose Us</Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Stack alignItems="center" spacing={1}>
            <EmojiEventsIcon color="primary" sx={{ fontSize: 38 }} />
            <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: '1rem' }}>Excellence & Quality</Typography>
            <Typography align="center" color="text.secondary" sx={{ fontSize: '0.95rem' }}>We deliver only the best products and services, ensuring top quality for every client.</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack alignItems="center" spacing={1}>
            <LocalShippingIcon color="primary" sx={{ fontSize: 38 }} />
            <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: '1rem' }}>Fast & Reliable Delivery</Typography>
            <Typography align="center" color="text.secondary" sx={{ fontSize: '0.95rem' }}>Our logistics ensure your products arrive on time, every time, with minimal downtime.</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack alignItems="center" spacing={1}>
            <VerifiedUserIcon color="primary" sx={{ fontSize: 38 }} />
            <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: '1rem' }}>Trusted Expertise</Typography>
            <Typography align="center" color="text.secondary" sx={{ fontSize: '0.95rem' }}>Years of experience in mining, construction, and industrial supply make us your trusted partner.</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>

    {/* Featured Products */}
    <Box className="section-bg" sx={{ py: 5, borderRadius: 3, mb: 6 }}>
      <Typography variant="h5" align="center" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '1.3rem', md: '1.6rem' } }}>Featured Products</Typography>
      <Grid container spacing={4} justifyContent="center">
        {featured.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className="card-shadow" sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="120"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: '1rem' }}>{product.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: '0.95rem' }}>{product.description}</Typography>
                <Button variant="outlined" color="primary" href={`/product/${product.id}`}>View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Testimonials */}
    <Box className="section-alt" sx={{ py: 6, borderRadius: 3, mb: 6 }}>
      <Typography variant="h4" align="center" fontWeight={700} gutterBottom>What Our Clients Say</Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((t, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Paper elevation={3} className="card-shadow" sx={{ p: 3, textAlign: 'center', borderRadius: 4, bgcolor: '#f9f9f9' }}>
              <Avatar src={t.avatar} alt={t.name} sx={{ width: 56, height: 56, mx: 'auto', mb: 1 }} />
              <FormatQuoteIcon color="primary" sx={{ fontSize: 32, mb: -2 }} />
              <Typography variant="body1" fontStyle="italic" sx={{ mb: 1 }}>
                {t.quote}
              </Typography>
              <Typography variant="subtitle2" fontWeight={600}>{t.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Company Mission & Vision */}
    <Box className="section-bg" sx={{ mb: 8, py: 6, borderRadius: 3 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={2} className="card-shadow" sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>Our Mission</Typography>
            <Typography>
              To provide a service that will add sustainable, value-engineered solutions to the operation of our clients in commerce, industry, and the public sector. We strive to understand our clients’ needs and to deliver service excellence with uncompromising passion and quality.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} className="card-shadow" sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>Our Vision</Typography>
            <Typography>
              Our vision is to be the Mining and Infrastructure Specialists of choice in the markets we serve.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default Home; 