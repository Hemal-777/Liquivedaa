const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        productId: { type: Number, required: true }, // Store productId as number
        name: { type: String, required: true }, // Store product name
        price: { type: Number, required: true }, // Store product price
        quantity: { type: Number, default: 1 }
    }]
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;




