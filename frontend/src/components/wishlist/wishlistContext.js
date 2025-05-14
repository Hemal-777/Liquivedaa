// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { getWishlist, addToWishlist, removeFromWishlist } from './wishlistService';
// import { toast } from 'react-toastify';

// export const WishlistContext = createContext(null);

// export const WishlistProvider = ({ children }) => {
//     const [wishlistItems, setWishlistItems] = useState([]); // Initialize as an empty array

//     useEffect(() => {
//         const fetchWishlist = async () => {
//             try {
//                 const data = await getWishlist();
//                 console.log("Fetched wishlist data:", data); // Debugging line
//                 // Ensure that items is always an array
//                 if (data && Array.isArray(data.items)) {
//                     setWishlistItems(data.items); 
//                 } else {
//                     setWishlistItems([]); // Default to an empty array
//                 }
//             } catch (error) {
//                 console.error("Error fetching wishlist:", error);
//                 toast.error('Failed to fetch wishlist.'); // Notify user
//                 setWishlistItems([]); // Default to an empty array on error
//             }
//         };

//         fetchWishlist();
//     }, []);

//     const handleAddToWishlist = async (productId, name, price) => {
//         try {
//             const data = await addToWishlist(productId, name, price);
//             console.log("Added to wishlist:", data); // Debugging line
//             if (data && Array.isArray(data.wishlist.items)) {
//                 setWishlistItems(data.wishlist.items);
//             } else {
//                 setWishlistItems([]); // Default to an empty array
//             }
//             toast.success('Item added to wishlist successfully!');
//         } catch (error) {
//             console.error("Failed to add item to wishlist:", error);
//             toast.error('Failed to add item to wishlist.');
//         }
//     };

//     const handleRemoveFromWishlist = async (productId) => {
//         try {
//             const data = await removeFromWishlist(productId);
//             console.log("Removed from wishlist:", data); // Debugging line
//             if (data && Array.isArray(data.wishlist.items)) {
//                 setWishlistItems(data.wishlist.items);
//             } else {
//                 setWishlistItems([]); // Default to an empty array
//             }
//             toast.success('Item removed from wishlist successfully!');
//         } catch (error) {
//             console.error("Failed to remove item from wishlist:", error);
//             toast.error('Failed to remove item from wishlist.');
//         }
//     };

//     return (
//         <WishlistContext.Provider value={{ wishlistItems, handleAddToWishlist, handleRemoveFromWishlist }}>
//             {children}
//         </WishlistContext.Provider>
//     );
// };

// export const useWishlist = () => useContext(WishlistContext);









import React, { createContext, useState, useEffect, useContext } from 'react';
import { getWishlist, addToWishlist, removeFromWishlist } from './wishlistService';
import { toast } from 'react-toastify';

export const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const data = await getWishlist();
                if (data && Array.isArray(data.items)) {
                    setWishlistItems(data.items); 
                } else {
                    setWishlistItems([]); 
                }
            } catch (error) {
                console.error("Error fetching wishlist:", error);
                //toast.error('Failed to fetch wishlist.'); 
                setWishlistItems([]); 
            }
        };

        fetchWishlist();
    }, []);

    const handleAddToWishlist = async (productId, name, price) => {
        try {
            const data = await addToWishlist(productId, name, price);
            if (data && Array.isArray(data.wishlist.items)) {
                setWishlistItems(data.wishlist.items);
            } else {
                setWishlistItems([]);
            }
            //toast.success('Item added to wishlist successfully!');
        } catch (error) {
            if (error.message.includes('Unauthorized')) {
                toast.error('Please log in to add items to the wishlist.');
                // Optional: Redirect to login page
            } else {
                toast.error('Failed to add item to wishlist.');
            }
        }
    };

    const handleRemoveFromWishlist = async (productId) => {
        try {
            const data = await removeFromWishlist(productId);
            if (data && Array.isArray(data.wishlist.items)) {
                setWishlistItems(data.wishlist.items);
                toast.success('Item removed from wishlist successfully!');
            } else {
                setWishlistItems([]);
            }
            toast.success('Item removed from wishlist successfully!');
        } catch (error) {
            if (error.message.includes('Unauthorized')) {
                toast.error('Please log in to remove items from the wishlist.');
                // Optional: Redirect to login page
            } else {
                toast.error('Failed to remove item from wishlist.');
            }
        }
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, handleAddToWishlist, handleRemoveFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
