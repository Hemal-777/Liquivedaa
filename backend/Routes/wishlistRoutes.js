// wishlistRoutes.js
const express = require('express');
const {
    addToWishlist,
    removeFromWishlist,
    getWishlist
} = require('../Controllers/wishlistController');
const ensureAuthenticated = require('../Middlewares/Auth');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Validation rules for adding to wishlist
const validateAddToWishlist = [
    body('productId').isNumeric().withMessage('Invalid Product ID. Must be a number.'),
    body('name').notEmpty().withMessage('Product name is required.'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number.')
];

// Handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Get user's wishlist
router.get('/', ensureAuthenticated, getWishlist);

// Add item to wishlist
router.post('/add', ensureAuthenticated, validateAddToWishlist, handleValidationErrors, addToWishlist);

// Remove item from wishlist
router.delete('/remove/:productId', ensureAuthenticated, removeFromWishlist);

module.exports = router;

