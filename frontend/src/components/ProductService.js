// frontend/src/services/productService.js
import axios from 'axios';

// Add a product
export const addProduct = async (productData, token) => {
    try {
        const response = await axios.post('https://baquiveda-backend.vercel.app/products/add', productData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Get all products
export const getAllProducts = async () => {
    try {
        const response = await axios.get('https://baquiveda-backend.vercel.app/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
