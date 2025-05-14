import axios from 'axios';

const BASE_URL = 'https://baquiveda-backend.vercel.app/cart';

// Add to cart
export const addToCart = async (productId, quantity = 1, name, price) => {
    const token = localStorage.getItem('token');
    try {
        const payload = { productId: String(productId), name, price, quantity }; // Ensure productId is a string
        const response = await axios.post(
            `${BASE_URL}/add`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error adding to cart:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Error adding to cart. Please try again.');
    }
};

// Remove from cart
export const removeFromCart = async (productId) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.delete(
            `${BASE_URL}/remove/${productId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error removing from cart:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Error removing from cart. Please try again.');
    }
};

// Increase quantity
export const increaseCartItemQuantity = async (productId) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.post(
            `${BASE_URL}/increase-quantity/${productId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error increasing item quantity:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Error increasing item quantity. Please try again.');
    }
};

// Get cart
export const getCart = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(BASE_URL, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cart:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Error fetching cart. Please try again.');
    }
};
