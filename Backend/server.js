const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const adminRoutes = require('./routes/admin');
const productRoutes=require('./routes/products')
dotenv.config();
const authMiddleware = require('./middlewares/authMiddleware');

const path = require('path');

const connectDB = require('./config/db'); // Importing db.js for DB connection

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Test route
app.get('/', (req, res) => {
  res.send('API is working!');
});
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


app.use('/api/products', productRoutes);

app.use('/api/admin', adminRoutes);

// Admin panel route (Protected)
app.get('/admin/panel', authMiddleware, (req, res) => {
  res.send('Welcome to the Admin Panel');
});
// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
