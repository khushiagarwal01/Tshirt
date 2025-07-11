const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/Admin');
const { default: mongoose } = require('mongoose');
router.post('/register', async (req, res) => {
  const { email, password } = req.body; // ✅ removed 'name'
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already registered' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userId: new mongoose.Types.ObjectId().toString(),
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



// routes/auth.js
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Email:', email);
  console.log('Password:', password);
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
const token = jwt.sign({ userId: user.userId }, 'your_secret_key');
      
     res.json({
  token,
  userId: user.userId, // ✅ Correct field
  email: user.email,
  role: user.role
});
console.log("User found:", user);

    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  module.exports = router;