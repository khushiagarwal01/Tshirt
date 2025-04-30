const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Product = require("../models/Product");

// Multer configuration for storing uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save the uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid conflicts
  },
});

const upload = multer({ storage });

// Add product route with image upload
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.file.path,  // Store image path (not the image itself)
      description: req.body.description,
    });
    
    await product.save();
    res.send({ success: true, product });
  } catch (err) {
    res.status(500).send({ success: false, message: "Error adding product" });
  }
});

// Other product routes (e.g., for getting products, deleting, etc.)


// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// Update product
router.put("/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.send({ success: true });
});

// Delete product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send({ success: true });
});

module.exports = router;
