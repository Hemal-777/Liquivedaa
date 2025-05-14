const Wishlist = require('../wishlist/wishlistModel');

// Add to wishlist
exports.addToWishlist = async (req, res) => {
    try {
        const { productId, name, price } = req.body;
        const userId = req.user._id;

        let wishlist = await Wishlist.findOne({ userId });
        if (!wishlist) {
            wishlist = new Wishlist({ userId, items: [] });
        }

        const existingItemIndex = wishlist.items.findIndex(item => item.productId == productId);
        if (existingItemIndex === -1) {
            wishlist.items.push({ productId, name, price });
            await wishlist.save();
            return res.status(200).json({ message: 'Item added to wishlist', wishlist });
        }

        return res.status(400).json({ message: 'Item already in wishlist' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

// Remove from wishlist
exports.removeFromWishlist = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        const wishlist = await Wishlist.findOne({ userId });
        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        const itemIndex = wishlist.items.findIndex(item => item.productId == productId);
        if (itemIndex === -1) {
            return res.status(404).json({ message: "Product not found in wishlist" });
        }

        wishlist.items.splice(itemIndex, 1);
        await wishlist.save();

        return res.status(200).json({ message: "Item removed from wishlist", wishlist });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

// Get wishlist
exports.getWishlist = async (req, res) => {
    try {
        const userId = req.user._id;
        const wishlist = await Wishlist.findOne({ userId });

        if (!wishlist) {
            return res.status(200).json({ items: [] });
        }

        return res.status(200).json({ items: wishlist.items });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};
