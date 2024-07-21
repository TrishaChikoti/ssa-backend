const mongoose = require('mongoose');

const QueueSchema = new mongoose.Schema({
  customerId: String,
  queuePosition: Number,
  queueTime: Date,
});

module.exports = mongoose.model('Queue', QueueSchema);
