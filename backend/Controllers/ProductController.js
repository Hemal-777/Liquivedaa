// Controllers/ProductController.js
const Product = require('../Models/Products');

// Add a new product
const addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        return res.status(201).json({ message: 'Product added successfully', product });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({ message: 'Error adding product', error: err.message });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({ message: 'Error fetching products', error: err.message });
    }
};

// Get a single product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        return res.status(200).json(product);
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({ message: 'Error fetching product', error: err.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        return res.status(200).json({ message: 'Product updated successfully', product });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({ message: 'Error updating product', error: err.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({ message: 'Error deleting product', error: err.message });
    }
};

module.exports = {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
