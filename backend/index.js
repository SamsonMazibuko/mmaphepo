require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const mysql = require('mysql2/promise'); // Remove MySQL
const db = require('./db'); // Import SQLite connection

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

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