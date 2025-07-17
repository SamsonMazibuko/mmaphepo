const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to the local SQLite database file
const dbPath = path.resolve(__dirname, 'local.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to SQLite database', err);
  } else {
    console.log('Connected to SQLite database at', dbPath);
  }
});

// Create users table if it doesn't exist
const createUsersTableSQL = `CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  isVerified INTEGER DEFAULT 0,
  verificationToken TEXT,
  verificationTokenCreatedAt DATETIME,
  resetToken TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`;

db.run(createUsersTableSQL, (err) => {
  if (err) {
    console.error('Could not create users table', err);
  } else {
    console.log('Users table ensured in SQLite database');
  }
});

module.exports = db; 