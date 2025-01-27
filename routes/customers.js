const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new customer
router.post('/', async (req, res) => {
  const customer = new Customer({
    name: req.body.name,
    email: req.body.email,
    preferences: req.body.preferences,
    purchaseHistory: req.body.purchaseHistory,
  });

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
