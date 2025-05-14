// import React, { createContext, useState, useEffect } from 'react';
// import { getCart, addToCart as cartServiceAddToCart } from './cartService';

// export const CartContext = createContext(null);

// export const CartProvider = ({ children, token }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchCart = async () => {
//       setLoading(true);
//       setError(null); // Reset error on new fetch
//       if (token) {
//         try {
//           const cartData = await getCart(token);
//           setCartItems(cartData.items || []); // Ensure items are set properly
//           setTotal(cartData.total || 0); // Set total or default to 0
//         } catch (err) {
//           setError('Failed to fetch cart data.');
//           console.error(err);
//         }
//       }
//       setLoading(false);
//     };
//     fetchCart();
//   }, [token]);

//   const addToCart = async (product, navigate) => {
//     if (token) {
//       try {
//         const updatedCart = await cartServiceAddToCart(token, product);
//         setCartItems(updatedCart.items || []); // Ensure items are updated properly
//         setTotal(updatedCart.total || 0); // Set total or default to 0
//       } catch (err) {
//         console.error("Failed to add item to cart:", err);
//         alert('Failed to add item to cart.');
//       }
//     } else {
//       console.error("User is not logged in");
//       navigate('/login'); // Redirect to login if user is not authenticated
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, total, loading, error, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };






import React, { createContext, useState, useEffect } from 'react';
import { getCart, addToCart as cartServiceAddToCart } from './cartService';

export const CartContext = createContext(null);

export const CartProvider = ({ children, token }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      setError(null); // Reset error on new fetch
      try {
        const cartData = await getCart(token); // Fetch the cart with token if available
        setCartItems(cartData.items || []); // Ensure items are set properly
        setTotal(cartData.total || 0); // Set total or default to 0
      } catch (err) {
        setError('Failed to fetch cart data.');
        console.error(err);
      }
      setLoading(false);
    };
    if (token) fetchCart(); // Fetch the cart only if token is present
    else setLoading(false); // Disable loading if no token (guest users)
  }, [token]);

  const addToCart = async (product, navigate) => {
    if (token) {
      try {
        const updatedCart = await cartServiceAddToCart(token, product);
        setCartItems(updatedCart.items || []); // Ensure items are updated properly
        setTotal(updatedCart.total || 0); // Set total or default to 0
      } catch (err) {
        console.error("Failed to add item to cart:", err);
        alert('Failed to add item to cart.');
      }
    } else {
      navigate('/login'); // Redirect to login if user is not authenticated
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, total, loading, error, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
