const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  preferences: Array,
  purchaseHistory: Array,
});

module.exports = mongoose.model('Customer', CustomerSchema);
