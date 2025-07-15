import React, { useState, useContext } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, TextField, Box, Menu, MenuItem, AppBar, Toolbar, Paper, Fade } from "@mui/material";
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import SettingsIcon from '@mui/icons-material/Settings';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BuildIcon from '@mui/icons-material/Build';
import HubIcon from '@mui/icons-material/Hub';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import products from "../data/products";

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
    description: "Transmission Chains & Sprockets",
    icon: <AllInclusiveIcon sx={{ mr: 1, color: '#1976d2' }} />
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
    description: "Sprockets for all chains in our range",
    icon: <DonutLargeIcon sx={{ mr: 1, color: '#1976d2' }} />
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
    description: "V Pulleys, Timing Belts & Taper Bushes",
    icon: <SettingsInputComponentIcon sx={{ mr: 1, color: '#1976d2' }} />
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
    description: "Rapid Fit Pulleys & Taper Bushes",
    icon: <PrecisionManufacturingIcon sx={{ mr: 1, color: '#1976d2' }} />
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
    description: "Shaft Fixings for all applications",
    icon: <BuildIcon sx={{ mr: 1, color: '#1976d2' }} />
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
    description: "7 Common Types Available from Stock",
    icon: <HubIcon sx={{ mr: 1, color: '#1976d2' }} />
  },
  {
    title: "Electric Motors",
    sub: [
      "Motor Mounts",
      "Three Phase"
    ],
    description: "Stocked Electric Motors",
    icon: <ElectricBoltIcon sx={{ mr: 1, color: '#1976d2' }} />
  },
  {
    title: "Gearboxes",
    sub: [
      "Worm Gear Units",
      "SMSRs"
    ],
    description: "Gearboxes & Worm Gear Units",
    icon: <SettingsEthernetIcon sx={{ mr: 1, color: '#1976d2' }} />
  },
  {
    title: "Bearings",
    sub: [
      "Bearing Units",
      "Plummer Blocks",
      "Standard Bearings"
    ],
    description: "Bearing Units, Plummer Blocks & More",
    icon: <SettingsIcon sx={{ mr: 1, color: '#1976d2' }} />
  }
];

const Shop = () => {
  const [search, setSearch] = useState("");
  const { addToCart } = useContext(CartContext);

  // Category and subcategory state
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  // Get all unique categories from shopMenu for order and icons
  const categories = shopMenu.map(c => c.title);
  const getSubcategories = (cat) => {
    const found = shopMenu.find(c => c.title === cat);
    return found ? found.sub : [];
  };
  const getIcon = (cat) => {
    const found = shopMenu.find(c => c.title === cat);
    return found ? found.icon : null;
  };

  // Filter products by search, category, and subcategory
  const filtered = products.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.category && p.category.toLowerCase().includes(search.toLowerCase())) ||
      (p.subcategory && p.subcategory.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchesSubcategory = selectedSubcategory ? p.subcategory === selectedSubcategory : true;
    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  // Dropdown handlers
  const handleCategoryClick = (event, cat) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(cat);
    setSelectedSubcategory(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleSubcategorySelect = (sub) => {
    setSelectedSubcategory(sub);
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Horizontal category bar */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          mb: 2,
          px: 0,
          py: 0,
          bgcolor: '#2196f3',
          borderRadius: 2,
          boxShadow: '0 2px 8px rgba(33,150,243,0.15)',
          minHeight: 56,
          height: 56,
          gap: 0,
        }}
      >
        {categories.map(cat => {
          const icon = getIcon(cat);
          return (
            <Button
              key={cat}
              onClick={e => handleCategoryClick(e, cat)}
              sx={{
                flex: '1 1 0',
                height: '100%',
                minWidth: 0,
                px: 0,
                py: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                bgcolor: selectedCategory === cat ? '#1976d2' : 'transparent',
                borderRadius: 0,
                boxShadow: 'none',
                fontWeight: selectedCategory === cat ? 700 : 500,
                fontSize: '0.85rem',
                transition: 'background 0.2s',
                outline: 'none',
                '&:hover': {
                  bgcolor: selectedCategory === cat ? '#1565c0' : 'rgba(25, 118, 210, 0.12)',
                  color: '#fff',
                },
                '&.Mui-focusVisible': {
                  outline: 'none',
                  boxShadow: 'none',
                },
              }}
            >
              <Box sx={{ mb: 0.25, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</Box>
              <Box sx={{ fontSize: '0.85rem', textAlign: 'center', lineHeight: 1.1 }}>{cat}</Box>
            </Button>
          );
        })}
        {/* Subcategory dropdown menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{ sx: { minWidth: 220 } }}
        >
          {selectedCategory && getSubcategories(selectedCategory).map(sub => (
            <MenuItem
              key={sub}
              selected={selectedSubcategory === sub}
              onClick={() => handleSubcategorySelect(sub)}
              sx={{
                fontWeight: selectedSubcategory === sub ? 'bold' : 'normal',
                color: selectedSubcategory === sub ? 'primary.main' : 'inherit',
                bgcolor: selectedSubcategory === sub ? 'primary.lighter' : 'inherit',
                '&.Mui-selected': {
                  bgcolor: 'primary.light',
                  color: 'primary.main',
                },
                '&.Mui-selected:hover': {
                  bgcolor: 'primary.main',
                  color: '#fff',
                },
              }}
            >
              {sub}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {/* Show selected subcategory as a chip or label (optional) */}
      {selectedSubcategory && (
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="subtitle1" color="secondary">{selectedCategory} / {selectedSubcategory}</Typography>
        </Box>
      )}
      {/* Search and product grid */}
      <Box sx={{ p: 2 }}>
        <TextField
          label="Search products"
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Grid container spacing={3}>
          {filtered.map((product, idx) => (
            <Grid item xs={12} sm={6} md={4} key={product.name + idx}>
              <Card sx={{ maxWidth: 280, mx: 'auto', boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
                />
                <CardContent sx={{ py: 1, px: 1.5 }}>
                  <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: '1rem' }}>{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>{product.category}{product.subcategory ? ` / ${product.subcategory}` : ''}</Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>{product.price}</Typography>
                </CardContent>
                <CardActions sx={{ py: 0.5, px: 1.5 }}>
                  <Button size="small" sx={{ fontSize: '0.85rem', py: 0.5, px: 1.5 }} onClick={() => addToCart(product)}>Add to Cart</Button>
                  <Button
                    size="small"
                    sx={{ fontSize: '0.85rem', py: 0.5, px: 1.5 }}
                    component={Link}
                    to={`/product/${product.id || idx}`}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Shop; 