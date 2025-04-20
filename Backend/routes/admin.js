const express = require('express');
const router = express.Router();
const { adminLogin } = require('../Controllers/Admincontroller');

router.post('/login', adminLogin);

module.exports = router;
