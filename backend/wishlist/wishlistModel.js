const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        productId: { type: Number, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true }
    }]
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;
