const jwt = require('jsonwebtoken');

const ADMIN_EMAIL = "agarwalkhushi010101@gmail.com";
const ADMIN_PASSWORD = "#Successis01";

exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email, role: 'admin' }, "secretkey", { expiresIn: '1d' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};
