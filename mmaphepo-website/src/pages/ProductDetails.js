import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import products from "../data/products";
import { CartContext } from "../App";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <Typography>Product not found.</Typography>;

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1" color="text.secondary">{product.category}</Typography>
          <Typography variant="body2" sx={{ my: 2 }}>{product.description}</Typography>
          <Typography variant="h6">R{product.price}</Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart} sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetails; 