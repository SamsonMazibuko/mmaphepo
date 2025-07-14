import React, { useContext, useState } from "react";
import { Typography, Box, Paper, TextField, Button, Stack, Alert, RadioGroup, FormControlLabel, Radio, FormLabel, Collapse } from "@mui/material";
import { CartContext } from "../App";
import { OrderContext } from "../App";
import { useNavigate } from "react-router-dom";

function generateOrderId() {
  return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const [form, setForm] = useState({ name: '', email: '', address: '', phone: '' });
  const [payment, setPayment] = useState('cod');
  const [card, setCard] = useState({ number: '', expiry: '', cvv: '', holder: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (cart.length === 0 && !submitted) {
    return (
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>Checkout</Typography>
          <Typography variant="body1">Your cart is empty.</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate('/shop')}>Back to Shop</Button>
        </Paper>
      </Box>
    );
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCardChange = e => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };
  const handlePaymentChange = e => {
    setPayment(e.target.value);
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (payment === 'card') {
      if (!card.number || !card.expiry || !card.cvv || !card.holder) {
        setError('Please fill in all card details.');
        return;
      }
      if (card.number.length < 12 || card.cvv.length < 3) {
        setError('Invalid card details.');
        return;
      }
    }
    // Save order to history
    addOrder({
      id: generateOrderId(),
      items: cart,
      customer: form,
      payment,
      card: payment === 'card' ? { ...card, number: '****' + card.number.slice(-4) } : null,
      status: 'active',
      date: new Date().toISOString(),
    });
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Alert severity="success" sx={{ mb: 2 }}>Thank you for your order!</Alert>
          <Typography variant="h5" gutterBottom>Order Placed Successfully</Typography>
          <Typography variant="body1">We have received your order and will contact you soon.</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate('/')}>Back to Home</Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4, maxWidth: 500, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>Checkout</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField label="Name" name="name" value={form.name} onChange={handleChange} required fullWidth />
            <TextField label="Email" name="email" value={form.email} onChange={handleChange} required type="email" fullWidth />
            <TextField label="Delivery Address" name="address" value={form.address} onChange={handleChange} required fullWidth multiline minRows={2} />
            <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} required fullWidth />
            <Box>
              <FormLabel component="legend">Payment Method</FormLabel>
              <RadioGroup row value={payment} onChange={handlePaymentChange}>
                <FormControlLabel value="cod" control={<Radio />} label="Pay on Delivery" />
                <FormControlLabel value="card" control={<Radio />} label="Card Payment" />
              </RadioGroup>
            </Box>
            <Collapse in={payment === 'card'}>
              <Stack spacing={2} sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
                <TextField label="Card Number" name="number" value={card.number} onChange={handleCardChange} fullWidth required={payment === 'card'} inputProps={{ maxLength: 19 }} />
                <Stack direction="row" spacing={2}>
                  <TextField label="Expiry (MM/YY)" name="expiry" value={card.expiry} onChange={handleCardChange} required={payment === 'card'} fullWidth />
                  <TextField label="CVV" name="cvv" value={card.cvv} onChange={handleCardChange} required={payment === 'card'} inputProps={{ maxLength: 4 }} fullWidth />
                </Stack>
                <TextField label="Cardholder Name" name="holder" value={card.holder} onChange={handleCardChange} required={payment === 'card'} fullWidth />
              </Stack>
            </Collapse>
            {error && <Alert severity="error">{error}</Alert>}
            <Button type="submit" variant="contained" color="primary" size="large">Place Order</Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Checkout; 