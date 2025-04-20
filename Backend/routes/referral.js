const express = require('express');
const router = express.Router();

router.post('/refer', async (req, res) => {
  const { userId, referredUserId } = req.body;

  // dummy logic
  if (!userId || !referredUserId) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // yeh abhi ke liye dummy
  return res.status(200).json({ message: "Referral successful" });
});

module.exports = router;
