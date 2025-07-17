CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  isVerified INTEGER DEFAULT 0,
  verificationToken TEXT,
  verificationTokenCreatedAt DATETIME,
  resetToken TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
); 