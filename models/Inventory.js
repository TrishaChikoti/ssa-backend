const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  productId: String,
  productName: String,
  quantity: Number,
});

module.exports = mongoose.model('Inventory', InventorySchema);
