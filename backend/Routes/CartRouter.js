const express = require('express');
const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    getCart
} = require('../Controllers/cartController');
const ensureAuthenticated = require('../Middlewares/Auth'); // Ensure user is authenticated
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Validation rules for adding to the cart
const validateAddToCart = [
    body('productId').isNumeric().withMessage('Invalid Product ID. Must be a number.'),
    body('name').notEmpty().withMessage('Product name is required.'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number.'),
    body('quantity').optional().isInt({ gt: 0 }).withMessage('Quantity must be a positive integer.')
];

// Validation error handler middleware
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Get user's cart
router.get('/', ensureAuthenticated, getCart);

// Add item to cart
router.post('/add', ensureAuthenticated, validateAddToCart, handleValidationErrors, addToCart);

// Remove item from cart
router.delete('/remove/:productId', ensureAuthenticated, handleValidationErrors, removeFromCart);

// Increase item quantity in cart
router.put('/increase/:productId', ensureAuthenticated, increaseQuantity); // Added the increase quantity route

module.exports = router;




// const express = require('express');
// const {
//     addToCart,
//     removeFromCart,
//     getCart,
//     increaseQuantity // Ensure this is included if you use it
// } = require('../Controllers/cartController');
// const ensureAuthenticated = require('../MiddleWares/Auth'); // Ensure user is authenticated

// const router = express.Router();

// // Get user's cart
// router.get('/', ensureAuthenticated, getCart);

// // Add item to cart
// router.post('/add', ensureAuthenticated, addToCart);

// // Remove item from cart
// router.delete('/remove/:productId', ensureAuthenticated, removeFromCart);

// // Increase item quantity in cart
// router.put('/increase/:productId', ensureAuthenticated, increaseQuantity);

// module.exports = router;
