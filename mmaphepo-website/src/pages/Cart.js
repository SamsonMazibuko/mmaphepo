import React, { useContext, useState } from "react";
import { Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, TextField, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Alert } from "@mui/material";

const Cart = () => {
  const { cart, removeFromCart, updateQty, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (parseFloat(item.price) || 0) * (item.qty || 1), 0);

  // Quote dialog state
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({ name: "", email: "", message: "" });
  const [quoteSent, setQuoteSent] = useState(false);

  const handleQuoteOpen = () => setQuoteOpen(true);
  const handleQuoteClose = () => setQuoteOpen(false);
  const handleQuoteChange = e => setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  const handleQuoteSubmit = e => {
    e.preventDefault();
    setQuoteOpen(false);
    setQuoteSent(true);
    setQuoteForm({ name: "", email: "", message: "" });
  };

  if (cart.length === 0) {
    return (
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>Your Cart</Typography>
          <Typography variant="body1">Your cart is empty.</Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>Your Cart</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Subtotal</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map(item => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <img src={item.image} alt={item.name} style={{ width: 48, height: 48, objectFit: 'contain', background: '#f5f5f5', borderRadius: 8 }} />
                      <Typography>{item.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>R{item.price}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      size="small"
                      value={item.qty}
                      inputProps={{ min: 1, style: { width: 48 } }}
                      onChange={e => updateQty(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                    />
                  </TableCell>
                  <TableCell>R{item.price * item.qty}</TableCell>
                  <TableCell>
                    <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Total: R{total}</Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="error" onClick={clearCart}>Clear Cart</Button>
            <Button variant="contained" color="primary" onClick={() => navigate('/checkout')}>Proceed to Checkout</Button>
            <Button variant="contained" color="secondary" onClick={handleQuoteOpen}>Get Quote</Button>
          </Stack>
        </Box>
      </Paper>
      {/* Quote Dialog */}
      <Dialog open={quoteOpen} onClose={handleQuoteClose}>
        <DialogTitle>Request a Quote</DialogTitle>
        <form onSubmit={handleQuoteSubmit}>
          <DialogContent sx={{ minWidth: 320 }}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              name="name"
              value={quoteForm.name}
              onChange={handleQuoteChange}
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label="Email"
              name="email"
              type="email"
              value={quoteForm.email}
              onChange={handleQuoteChange}
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label="Message (optional)"
              name="message"
              value={quoteForm.message}
              onChange={handleQuoteChange}
              fullWidth
              multiline
              minRows={2}
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2">Products to Quote:</Typography>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {cart.map(item => (
                  <li key={item.id}>{item.name} (x{item.qty || 1})</li>
                ))}
              </ul>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleQuoteClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="secondary">Submit Quote</Button>
          </DialogActions>
        </form>
      </Dialog>
      {/* Confirmation Snackbar */}
      <Snackbar open={quoteSent} autoHideDuration={4000} onClose={() => setQuoteSent(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setQuoteSent(false)} severity="success" sx={{ width: '100%' }}>
          Your quote request has been submitted! We will contact you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cart; 