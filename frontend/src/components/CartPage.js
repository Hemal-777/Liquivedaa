import React, { useContext } from 'react';
import { CartContext } from './cart/cartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles
import './CartPage.css'

const CartPage = () => {
  const { cartItems, handleRemoveFromCart, handleIncreaseQuantity } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    // Display toast message when checkout is initiated
    toast.success("Thank you for purchasing, we'll reach out to you", {
      position: "top-right",
      autoClose: 3000, // Auto close after 3 seconds
    });
  };

  return (
    <Container>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          {cartItems.map((item) => (
            <Col key={item.productId} md={4}>
              <div className="cart-item">
                <h5>{item.name}</h5>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <Button variant="danger" onClick={() => handleRemoveFromCart(item.productId)}>
                  Remove from Cart
                </Button>
                <Button variant="success" onClick={() => handleIncreaseQuantity(item.productId)}>
                  Increase Quantity
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      )}
      <h4 className="total-price">Total: ${calculateTotalPrice()}</h4>

      {cartItems.length > 0 && (
        <Button variant="primary" className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </Button>
      )}

      {/* ToastContainer to handle displaying the toast */}
      <ToastContainer />
    </Container>
  );
};

export default CartPage;
