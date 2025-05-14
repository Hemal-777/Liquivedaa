import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useCart } from './cart/cartContext';
import { WishlistContext } from './wishlist/wishlistContext';
import './Products.css'; // Custom styles for your products page
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'; 

const ProductsPage = () => {
  const { handleAddToCart } = useCart(); // Use addToCart from CartContext
  const { handleAddToWishlist } = useContext(WishlistContext); // Use addToWishlist from WishlistContext

  // Retrieve the JWT token from localStorage
  const token = localStorage.getItem('token'); // Or sessionStorage.getItem('token')

  const productList = [
    { id: 1, name: 'BrainAfza', price: 200, image: 'Product 1.jpeg', description: 'Quantity:200gm' },
    { id: 2, name: 'AmritPak', price: 220, image: 'Product 2.jpeg', description: 'Quantity:100gm' },
    { id: 3, name: 'Jiriyan Forte', price: 280, image: 'Product 4.jpeg', description: 'Quantity:60Tab' },
    { id: 4, name: 'Dr Flexo', price: 450, image: 'Product 5.jpeg', description: 'Quantity:30Tab' },
    { id: 5, name: 'Suga Sutra', price: 300, image: 'Product 6.jpeg', description: 'Quantity:60Tab' },
    { id: 6, name: 'Vicacid', price: 300, image: 'Product 7.jpeg', description: 'Quantity:60Tab' },
    { id: 7, name: 'Amrit Niswan', price: 180, image: 'Product 8.jpeg', description: 'Quantity:200ml' },
    { id: 8, name: 'Sadrina', price: 100, image: 'Product 9.jpeg', description: 'Quantity:100ml' },
    { id: 9, name: 'Sharbat Jiryan', price: 140, image: 'Product 10.jpeg', description: 'Quantity:200ml' },
    { id: 10, name: 'Liv-Hayat', price: 435, image: 'pro1.jpg', description: 'Quantity:200ml' },
    { id: 11, name: 'Balwan', price: 230, image: 'pro3.jpg', description: 'Quantity:500ml' },
    { id: 12, name: 'Wake Up', price: 280, image: 'pro4.jpg', description: 'Quantity:20Tab' },
    { id: 13, name: 'Shabab Akbar Special Jelly', price: 1260, image: 'pro2.jpg', description: 'Quantity:220gm' },
  ];

  return (
    <Container className="products-container">
      <Row>
        {productList.map(product => (
          <Col md={4} key={product.id} className="product-column">
            <Card className="product-card">
              <Card.Img variant="top" src={require(`/public/images/${product.image}`)} alt={product.name} className="product-image" />
              <Card.Body>
                <Card.Title className="product-title">{product.name}</Card.Title>
                <Card.Text className="product-description">
                  {product.description}
                </Card.Text>
                <p className="product-price">Rs.{product.price}</p>
                <Button variant="primary" className='button1' onClick={() => {
                  if (token) {
                    handleAddToCart(product.id, product.name, product.price, 1, token);
                    toast.success(`${product.name} added to cart`, {
                      position: "top-right",
                      autoClose: 2000,
                    });
                  } else {
                    console.error('User is not authenticated');
                    window.location.href = '/login'; //  Redirect to login if no token
                  }
                }}>
                  Cart
                </Button>
                <Button variant="outline-primary" className='button1' onClick={() => {
                  if (token) {
                    handleAddToWishlist(product.id, product.name, product.price, token);
                    toast.info(`${product.name} added to wishlist`, {
                      position: "top-right",
                      autoClose: 2000,
                    });
                  } else {
                    console.error('User is not authenticated');
                    window.location.href = '/login';
                  }
                }} >
                  Wishlist
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ProductsPage;