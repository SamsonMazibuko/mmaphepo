import React, { useContext } from "react";
import { Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, TextField, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQty, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

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
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Cart; 