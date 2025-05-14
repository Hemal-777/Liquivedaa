// import axios from 'axios';

// const BASE_URL = 'https://baquiveda-backend.vercel.app/wishlist';

// // Add to wishlist
// export const addToWishlist = async (productId, name, price) => {
//     const token = localStorage.getItem('token');
//     try {
//         const response = await axios.post(
//             `${BASE_URL}/add`,
//             { productId, name, price },
//             { headers: { Authorization: `Bearer ${token}` } }
//         );
//         return response.data; // Ensure it returns the expected format
//     } catch (error) {
//         console.error("Error adding to wishlist:", error.response?.data || error.message);
//         throw new Error(error.response?.data?.message || 'Error adding to wishlist. Please try again.');
//     }
// };

// // Remove from wishlist
// export const removeFromWishlist = async (productId) => {
//     const token = localStorage.getItem('token');
//     try {
//         const response = await axios.delete(
//             `${BASE_URL}/remove/${productId}`,
//             { headers: { Authorization: `Bearer ${token}` } }
//         );
//         return response.data; // Ensure it returns the expected format
//     } catch (error) {
//         console.error("Error removing from wishlist:", error.response?.data || error.message);
//         throw new Error(error.response?.data?.message || 'Error removing from wishlist. Please try again.');
//     }
// };

// // Get wishlist
// export const getWishlist = async () => {
//     const token = localStorage.getItem('token');
//     try {
//         const response = await axios.get(BASE_URL, { headers: { Authorization: `Bearer ${token}` } });
//         return response.data; // Ensure it returns the expected format
//     } catch (error) {
//         console.error("Error fetching wishlist:", error.response?.data || error.message);
//         throw new Error(error.response?.data?.message || 'Error fetching wishlist. Please try again.');
//     }
// };



import axios from 'axios';

const BASE_URL = 'https://baquiveda-backend.vercel.app/wishlist';

// Add to wishlist
export const addToWishlist = async (productId, name, price) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('Unauthorized: Please log in to perform this action.');
    }
    
    try {
        const response = await axios.post(
            `${BASE_URL}/add`,
            { productId, name, price },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data; 
    } catch (error) {
        console.error("Error adding to wishlist:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Error adding to wishlist. Please try again.');
    }
};

// Remove from wishlist
export const removeFromWishlist = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('Unauthorized: Please log in to perform this action.');
    }

    try {
        const response = await axios.delete(
            `${BASE_URL}/remove/${productId}`,
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data; 
    } catch (error) {
        console.error("Error removing from wishlist:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Error removing from wishlist. Please try again.');
    }
};

// Get wishlist
export const getWishlist = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return { items: [] }; // Return empty items if no token is available
    }

    try {
        const response = await axios.get(BASE_URL, { headers: { Authorization: `Bearer ${token}` } });
        return response.data; 
    } catch (error) {
        console.error("Error fetching wishlist:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Error fetching wishlist. Please try again.');
    }
};
