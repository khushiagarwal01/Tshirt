const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 🛒 Save/Update Cart
router.post('/update-cart', async (req, res) => {
  const { userId, cartItems } = req.body;
  try {
    const user = await User.findById(userId);
    if (user) {
      user.cart = cartItems;
      await user.save();
      res.json({ success: true, message: 'Cart updated' });
    } else {
      res.status(404).json({ error: 'User not found' });
      console.log("user not found")
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 🛒 Get Cart
router.get('/get-cart/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('cart.productId');
    if (user) {
      res.json({ cart: user.cart });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
