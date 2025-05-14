import React, { useEffect, useState } from 'react';
import { getWishlist, removeFromWishlist } from '../components/wishlist/wishlistService';
import { addToCart } from '../components/cart/cartService';
import './WishlistPage.css'; // Create a CSS file for better styling

const WishlistPage = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const data = await getWishlist();
                setWishlist(data.items); // Ensure items is correct based on API
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };

        fetchWishlist();
    }, []);

    const handleAddToCart = async (item) => {
        try {
            // Adding item to the cart with all required details
            await addToCart(item.productId, 1, item.name, item.price); // Set quantity to 1
            // Removing item from the wishlist after adding to the cart
            await removeFromWishlist(item.productId);
            setWishlist(wishlist.filter(wItem => wItem.productId !== item.productId));
        } catch (error) {
            console.error('Error adding to cart or removing from wishlist:', error);
        }
    };

    const handleRemoveFromWishlist = async (productId) => {
        try {
            await removeFromWishlist(productId);
            setWishlist(wishlist.filter(item => item.productId !== productId));
        } catch (error) {
            console.error('Error removing from wishlist:', error);
        }
    };

    return (
        <div className="wishlist-page">
            <h2>Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty</p>
            ) : (
                <ul className="wishlist-items">
                    {wishlist.map(item => (
                        <li key={item.productId} className="wishlist-item">
                            <div>
                                <h4>{item.name}</h4>
                                <p>Price: ${item.price}</p>
                            </div>
                            <div className="wishlist-actions">
                                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                                <button onClick={() => handleRemoveFromWishlist(item.productId)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WishlistPage;
