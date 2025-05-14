
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, validate: { validator: (v) => /^(ftp|http|https):\/\/[^ "]+$/.test(v), message: 'Invalid URL' }  }, // URL to product image
    category: { type: String ,index:true}, // Category of the product
    stock: { type: Number, required: true, min: 0, default: 0 }, // Quantity in stock
    createdAt: { type: Date, default: Date.now }
},{ timestamps: true });

// Create a model from the schema
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
