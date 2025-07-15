import React, { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, Stack, IconButton, Badge, Paper, TextField } from "@mui/material";
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Popover from '@mui/material/Popover';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

export const CartContext = createContext();
export const OrderContext = createContext();
export const AuthContext = createContext();

// shopMenu as before, but with images for some categories (optional, can be extended)
const shopMenu = [
  {
    title: "Chain",
    sub: [
      "Roller Chain",
      "Double Pitch Chain",
      "Leaf Chain",
      "Heavy Duty Drive Chain",
      "Timber Chain",
      "Food Industry Chain",
      "Agricultural Chain",
      "Conveyor Chain",
      "Block Chain",
      "Engineered Bush Chain",
      "Drop Forged Chain",
      "Palm Oil Chain",
      "Sugar Chain"
    ],
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/chain_left.jpg"
  },
  {
    title: "Sprockets",
    sub: [
      "British Standard Taper Bore Sprockets",
      "British Standard Pilot Bore Sprockets",
      "British Standard Pilot Bore Plate Wheels",
      "Taper Bore Double Simplex Sprockets",
      "Pilot Bore Double Simplex Sprockets",
      "Idler Sprockets",
      "ANSI Pilot Bore Sprockets"
    ],
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/sprockets_left.jpg"
  },
  {
    title: "Belts",
    sub: [
      "Classical V-Belts",
      "Classical CRE V-Belts",
      "Wedge Belts",
      "CRE Wedge Belts",
      "Narrow V Belts",
      "Classical Timing Belts",
      "Curved Tooth Timing Belts"
    ],
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/belts_left.jpg"
  },
  {
    title: "Pulleys",
    sub: [
      "V-Pulleys",
      "Variable Speed Pulleys",
      "PV Pulley - Section J",
      "PV Pulley - Section K",
      "PV Pulley - Section L",
      "Timing Pulleys - Taper Bore",
      "HTD Profile Pulleys - Taper Bore",
      "Metric Timing Pulleys - Pilot Bore",
      "Timing Pulleys - Pilot Bore",
      "HTD Profile Pulleys - Pilot Bore",
      "Metric Pitch Timing Bars",
      "HTD Profile Timing Bars"
    ],
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/pulleys_left.jpg"
  },
  {
    title: "Shaft Fixings",
    sub: [
      "Taper Bushes - Metric",
      "Taper Bushes - Imperial",
      "Taper Bush Adaptors",
      "Bolt-on-Hubs",
      "Weld-on-Hubs",
      "Shaftlock Sizes 01 - 22",
      "Torque Limiters"
    ],
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/shaft_fixings_left.jpg"
  },
  {
    title: "Shaft Couplings",
    sub: [
      "FFX Tyre Couplings",
      "HRC Couplings",
      "NPX Couplings",
      "RPX Couplings",
      "CNM Couplings",
      "JAW Couplings",
      "Chain Couplings"
    ],
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/shaft_couplings_left.jpg"
  },
  {
    title: "Electric Motors",
    sub: [
      "Motor Mounts",
      "Three Phase"
    ],
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/electric_motors_left.jpg"
  },
  {
    title: "Gearboxes",
    sub: [
      "Worm Gear Units",
      "SMSRs"
    ],
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/new_gear_boxes_left.jpg"
  },
  {
    title: "Bearings",
    sub: [
      "Bearing Units",
      "Plummer Blocks",
      "Standard Bearings"
    ],
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/bearings_left.jpg"
  }
];

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can we help you today?" }
  ]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { from: "user", text: input }]);
      setInput("");
      // Simulate bot reply
      setTimeout(() => {
        setMessages(msgs => [...msgs, { from: "bot", text: "Thank you for your inquiry! We'll get back to you soon." }]);
      }, 1000);
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1300 }}>
      {!open && (
        <IconButton color="primary" sx={{ bgcolor: '#fff', boxShadow: 3 }} onClick={() => setOpen(true)}>
          <ChatIcon />
        </IconButton>
      )}
      {open && (
        <Paper elevation={6} sx={{ width: 320, maxWidth: '90vw', p: 0, borderRadius: 3, boxShadow: 6 }}>
          <Box sx={{ bgcolor: 'primary.main', color: '#fff', p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
            <Typography fontWeight={600}>Chat with us</Typography>
            <IconButton size="small" sx={{ color: '#fff' }} onClick={() => setOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <Box sx={{ p: 2, minHeight: 180, maxHeight: 260, overflowY: 'auto', bgcolor: '#f9f9f9' }}>
            {messages.map((msg, idx) => (
              <Box key={idx} sx={{ mb: 1, textAlign: msg.from === 'user' ? 'right' : 'left' }}>
                <Typography variant="body2" sx={{ display: 'inline-block', px: 1.5, py: 0.5, borderRadius: 2, bgcolor: msg.from === 'user' ? 'primary.light' : '#e3e3e3', color: msg.from === 'user' ? 'primary.main' : '#222', maxWidth: '80%' }}>{msg.text}</Typography>
              </Box>
            ))}
          </Box>
          <Stack direction="row" spacing={1} sx={{ p: 1.5, borderTop: '1px solid #eee' }}>
            <TextField
              size="small"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
              sx={{ flex: 1, bgcolor: '#fff' }}
            />
            <Button variant="contained" color="primary" onClick={handleSend} disabled={!input.trim()}>Send</Button>
          </Stack>
        </Paper>
      )}
    </Box>
  );
}

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

  // Megamenu state (for Shop button only)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
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
                    <Button
                      color="primary"
                      component={Link}
                      to="/shop"
                      startIcon={<StorefrontIcon />}
                    >
                      Shop
                    </Button>
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
            <ChatWidget />
          </Router>
        </CartContext.Provider>
      </OrderContext.Provider>
    </AuthContext.Provider>
  );
}

export default App; 