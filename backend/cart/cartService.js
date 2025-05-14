// backend/cart/cartService.js

const Cart = require('./cartModel');

exports.getCartByUserId = async (userId) => {
  return await Cart.findOne({ userId }).populate('items.productId');
};

exports.addToCart = async (userId, productId) => {
  const cart = await Cart.findOne({ userId });
  if (cart) {
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      // Update quantity
      cart.items[itemIndex].quantity += 1;
    } else {
      // Add new item
      cart.items.push({ productId, quantity: 1 });
    }
    return await cart.save();
  } else {
    // Create a new cart if it doesn't exist
    const newCart = new Cart({ userId, items: [{ productId, quantity: 1 }] });
    return await newCart.save();
  }
};

exports.removeFromCart = async (userId, productId) => {
  const cart = await Cart.findOne({ userId });
  if (cart) {
    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    return await cart.save();
  }
  return null;
};

// Other cart-related functions can go here...



