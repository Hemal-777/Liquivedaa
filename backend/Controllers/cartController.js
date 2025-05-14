const Cart = require('../cart/cartModel');

// Add to cart
exports.addToCart = async (req, res) => {
    try {
        const { productId, name, price, quantity = 1 } = req.body;
        const userId = req.user._id;

        const cartItem = { productId, name, price, quantity };

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        const existingItemIndex = cart.items.findIndex(item => item.productId == productId);

        if (existingItemIndex > -1) {
            // Update existing item quantity
            cart.items[existingItemIndex].quantity += quantity;
        } else {
            // Add new item to cart
            cart.items.push(cartItem);
        }

        await cart.save();
        return res.status(200).json({ message: 'Item added to cart', cart });
    } catch (err) {
        console.error("Error adding to cart:", err);
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

// Remove from cart
exports.removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const itemIndex = cart.items.findIndex(item => item.productId == productId);
        if (itemIndex === -1) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        if (cart.items[itemIndex].quantity > 1) {
            // Decrease quantity if greater than 1
            cart.items[itemIndex].quantity -= 1;
        } else {
            // Remove item if quantity is 1
            cart.items.splice(itemIndex, 1);
        }

        await cart.save();
        const total = cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
        return res.status(200).json({ message: "Item updated in cart", cart: { items: cart.items, total } });
    } catch (err) {
        console.error("Error removing from cart:", err);
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

// Increase quantity of an item in the cart
exports.increaseQuantity = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const itemIndex = cart.items.findIndex(item => item.productId == productId);
        if (itemIndex === -1) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        // Increase the quantity
        cart.items[itemIndex].quantity += 1;

        await cart.save();
        const total = cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
        return res.status(200).json({ message: "Quantity increased", cart: { items: cart.items, total } });
    } catch (err) {
        console.error("Error increasing quantity:", err);
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

// Get cart
exports.getCart = async (req, res) => {
    try {
        const userId = req.user._id;
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            // Create a new cart if not found
            cart = new Cart({ userId, items: [] });
            await cart.save();
        }

        const total = cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
        return res.status(200).json({ items: cart.items, total });
    } catch (err) {
        console.error("Error fetching cart:", err);
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};
