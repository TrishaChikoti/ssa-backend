const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

// Get all inventory items
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new inventory item
router.post('/', async (req, res) => {
  const inventoryItem = new Inventory({
    productId: req.body.productId,
    productName: req.body.productName,
    quantity: req.body.quantity,
  });

  try {
    const newInventoryItem = await inventoryItem.save();
    res.status(201).json(newInventoryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
