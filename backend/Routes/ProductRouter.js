const express = require('express');
const {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../Controllers/ProductController');
const { body, param, validationResult } = require('express-validator');
const ensureAuthenticated = require('../Middlewares/Auth'); // Optional: Protect routes with JWT
const router = express.Router();

// Validation middleware for adding and updating products
const validateProduct = [
    body('name').notEmpty().withMessage('Product name is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    body('category').optional().isString().withMessage('Category must be a string'),
];

// Validation error handler
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Add product (Protected Route)
router.post('/add', ensureAuthenticated, validateProduct, handleValidationErrors, addProduct);

// Get all products
router.get('/', getProducts);

// Get a product by ID
router.get('/:id', param('id').isMongoId().withMessage('Invalid Product ID'), handleValidationErrors, getProductById);

// Update a product (Protected Route)
router.put('/:id', ensureAuthenticated, param('id').isMongoId().withMessage('Invalid Product ID'), validateProduct, handleValidationErrors, updateProduct);

// Delete a product (Protected Route)
router.delete('/:id', ensureAuthenticated, param('id').isMongoId().withMessage('Invalid Product ID'), handleValidationErrors, deleteProduct);

module.exports = router;
