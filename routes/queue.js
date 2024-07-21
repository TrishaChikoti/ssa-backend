const express = require('express');
const router = express.Router();
const Queue = require('../models/Queue');

// Get all queue items
router.get('/', async (req, res) => {
  try {
    const queue = await Queue.find();
    res.json(queue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new queue item
router.post('/', async (req, res) => {
  const queueItem = new Queue({
    customerId: req.body.customerId,
    queuePosition: req.body.queuePosition,
    queueTime: req.body.queueTime,
  });

  try {
    const newQueueItem = await queueItem.save();
    res.status(201).json(newQueueItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
