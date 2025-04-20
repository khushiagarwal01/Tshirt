const mongoose = require('mongoose');

const referralPointsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  referredUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pointsEarned: {
    type: Number,
    default: 10, // Default 10 points for a successful referral
  },
});

const ReferralPoints = mongoose.model('ReferralPoints', referralPointsSchema);
module.exports = ReferralPoints;
