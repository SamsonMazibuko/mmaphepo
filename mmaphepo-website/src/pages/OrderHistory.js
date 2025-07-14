import React, { useContext } from "react";
import { OrderContext } from "../App";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip, Stack } from "@mui/material";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleString();
}

const statusColors = {
  active: 'info',
  completed: 'success',
  cancelled: 'error',
};

const OrderHistory = () => {
  const { orders, updateOrderStatus } = useContext(OrderContext);

  return (
    <Box sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>Order History</Typography>
        {orders.length === 0 ? (
          <Typography>No orders placed yet.</Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Summary</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{formatDate(order.date)}</TableCell>
                    <TableCell>
                      <Chip label={order.status} color={statusColors[order.status] || 'default'} />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {order.items.length} item(s) for {order.customer.name}<br/>
                        {order.payment === 'card' ? 'Card' : 'Pay on Delivery'}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        {order.status === 'active' && (
                          <Button size="small" color="success" variant="outlined" onClick={() => updateOrderStatus(order.id, 'completed')}>Mark Completed</Button>
                        )}
                        {order.status === 'active' && (
                          <Button size="small" color="error" variant="outlined" onClick={() => updateOrderStatus(order.id, 'cancelled')}>Cancel</Button>
                        )}
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
};

export default OrderHistory; 