const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const CartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});
const userSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true,  // Can be a string or number, you can auto-generate it or manually assign
      unique: true,
    },
 
  email: { type: String, unique: true },
   password: {
    type: String,
    required: true,
  },
  
  royaltyPoints: { type: Number, default: 0 },
  referredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   cart: [CartItemSchema],
     role: {
    type: String,
    default: "user",
  },

});


module.exports = mongoose.model('User', userSchema);
