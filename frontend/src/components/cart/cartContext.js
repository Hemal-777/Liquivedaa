// import axios from 'axios';
// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// export const CartContext = createContext(null);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   // Fetch cart when component mounts
//   useEffect(() => {
//     const fetchCart = async () => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         try {
//           const response = await axios.get('https://baquiveda-backend.vercel.app/cart', {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setCartItems(response.data.items || []);
//         } catch (error) {
//           console.error("Error fetching cart:", error);
//           toast.error("Failed to fetch cart. Please log in again.");
//           localStorage.removeItem('token');
//           navigate('/login');
//         }
//       } else {
//         navigate('/login');
//       }
//     };

//     fetchCart();
//   }, [navigate]);

//   // Sync cartItems with local storage
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleAddToCart = async (productId, name, price, quantity = 1) => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       toast.error('Please log in to add items to your cart.');
//       navigate('/login');
//       return;
//     }

//     try {
//       const response = await axios.post('https://baquiveda-backend.vercel.app/cart/add', {
//         productId, name, price, quantity
//       }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(response.data.cart.items);
//       toast.success('Item added to cart successfully!');
//     } catch (error) {
//       console.error("Failed to add item to cart:", error.response?.data || error.message);
//       toast.error('Failed to add item to cart.');
//     }
//   };

//   const handleRemoveFromCart = async (productId) => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       toast.error('Please log in to remove items from your cart.');
//       navigate('/login');
//       return;
//     }

//     try {
//       const response = await axios.delete(`https://baquiveda-backend.vercel.app/cart/remove/${productId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(response.data.cart.items);
//       toast.success('Item updated in cart!');
//     } catch (error) {
//       console.error("Failed to update item in cart:", error.response?.data || error.message);
//       toast.error('Failed to update item in cart.');
//     }
//   };

//   const handleIncreaseQuantity = async (productId) => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       toast.error('Please log in to increase item quantity.');
//       navigate('/login');
//       return;
//     }

//     try {
//       const response = await axios.put(`https://baquiveda-backend.vercel.app/cart/increase/${productId}`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(response.data.cart.items);
//       toast.success('Quantity increased!');
//     } catch (error) {
//       console.error("Failed to increase quantity:", error.response?.data || error.message);
//       toast.error('Failed to increase quantity.');
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, handleAddToCart, handleRemoveFromCart, handleIncreaseQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };





import axios from 'axios';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Fetch cart when component mounts
  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('token');
      try {
        // Fetch cart even without token (guest users can view the cart)
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.get('https://baquiveda-backend.vercel.app/cart', { headers });
        setCartItems(response.data.items || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
        // toast.error("Failed to fetch cart.");
      }
    };

    fetchCart();
  }, []);

  // Sync cartItems with local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = async (productId, name, price, quantity = 1) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please log in to add items to your cart.');
      navigate('/login');
      return;
    }

    try {
      const response = await axios.post('https://baquiveda-backend.vercel.app/cart/add', {
        productId, name, price, quantity
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(response.data.cart.items);
      //toast.success('Item added to cart successfully!');
    } catch (error) {
      console.error("Failed to add item to cart:", error.response?.data || error.message);
      toast.error('Failed to add item to cart.');
    }
  };

  const handleRemoveFromCart = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please log in to remove items from your cart.');
      navigate('/login');
      return;
    }

    try {
      const response = await axios.delete(`https://baquiveda-backend.vercel.app/cart/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(response.data.cart.items);
      toast.success('Item removed from cart successfully!');
    } catch (error) {
      console.error("Failed to remove item from cart:", error.response?.data || error.message);
      toast.error('Failed to remove item from cart.');
    }
  };

  const handleIncreaseQuantity = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please log in to increase item quantity.');
      navigate('/login');
      return;
    }

    try {
      const response = await axios.put(`https://baquiveda-backend.vercel.app/cart/increase/${productId}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(response.data.cart.items);
      toast.success('Quantity increased!');
    } catch (error) {
      console.error("Failed to increase quantity:", error.response?.data || error.message);
      toast.error('Failed to increase quantity.');
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart, handleRemoveFromCart, handleIncreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
