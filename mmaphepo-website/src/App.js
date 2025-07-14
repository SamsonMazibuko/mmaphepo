import React, { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, Stack, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InfoIcon from '@mui/icons-material/Info';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import OrderHistory from "./pages/OrderHistory";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { companyLogo } from "./data/products";
import Footer from "./components/Footer";
import MoreMenu from "./components/MoreMenu";

export const CartContext = createContext();
export const OrderContext = createContext();
export const AuthContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  // Order state with localStorage persistence
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // Auth state
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  const login = (email, password) => {
    // For demo: accept any email/password, set user
    setUser({ email, name: email.split('@')[0] });
  };
  const logout = () => setUser(null);
  const register = (email, password, name) => {
    setUser({ email, name });
  };

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, qty } : item));
  };

  const clearCart = () => setCart([]);

  // Calculate total items in cart
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Order logic
  const addOrder = (order) => {
    setOrders(prev => [order, ...prev]);
  };
  const updateOrderStatus = (id, status) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}>
          <Router>
            <AppBar position="static" color="default" elevation={2} sx={{ mb: 4 }}>
              <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      boxShadow: 2,
                      bgcolor: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      <img src={companyLogo} alt="Company Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                    </Box>
                    <Typography variant="h5" fontWeight={700} color="primary" sx={{ letterSpacing: 1 }}>
                      Mmaphepo Holdings
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button color="primary" component={Link} to="/" startIcon={<HomeIcon />}>Home</Button>
                    <Button color="primary" component={Link} to="/shop" startIcon={<StorefrontIcon />}>Shop</Button>
                    <IconButton color="primary" component={Link} to="/cart">
                      <Badge badgeContent={cartCount} color="secondary">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                    <Button color="primary" component={Link} to="/about" startIcon={<InfoIcon />}>About</Button>
                    <MoreMenu />
                  </Stack>
                </Toolbar>
              </Container>
            </AppBar>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/orders" element={<OrderHistory />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Container>
            <Footer />
          </Router>
        </CartContext.Provider>
      </OrderContext.Provider>
    </AuthContext.Provider>
  );
}

export default App; 