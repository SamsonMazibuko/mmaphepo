import React, { useState, useContext } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, TextField, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import products from "../data/products";

const Shop = () => {
  const [search, setSearch] = useState("");
  const { addToCart } = useContext(CartContext);
  const filtered = products.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Box>
      <TextField
        label="Search products"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Grid container spacing={4}>
        {filtered.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">{product.category}</Typography>
                <Typography variant="body1">R{product.price}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/product/${product.id}`}>View</Button>
                <Button size="small" variant="contained" color="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shop; 