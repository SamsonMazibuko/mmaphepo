require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const mysql = require('mysql2/promise'); // Remove MySQL
const db = require('./db'); // Import SQLite connection

const app = express();
app.use(express.json());

const allowedOrigins = [
  'http://localhost:3000',
  'https://mmaphepo.co.za'
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// No MySQL connection pool needed
// const db = mysql.createPool({ ... });

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 