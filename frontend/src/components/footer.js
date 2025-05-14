import React, { useEffect, useState } from 'react';
import './footer.css'; // Custom CSS for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // AOS CSS
import { Link } from 'react-router-dom'; // Import Link for routing
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const Footer = () => {
  const [email, setEmail] = useState('');


  const handleSubscribe = () => {
    // Logic for subscription (e.g., API call)
    toast.success('Subscribed successfully!'); // Notification
  };

  return (
    <footer className="footer-container">
      {/* Mailing List Section */}
      <div className="mailing-list" >
        <h2>Join Our Mailing List and Stay Updated</h2>
        <div className="subscribe">
          <label htmlFor="subscribe-email" className="visually-hidden">Email Address</label>
          <input
            type="email"
            id="subscribe-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="subscribe-input"
          />
          <button onClick={handleSubscribe} className="subscribe-button">SUBSCRIBE</button>
        </div>
      </div>

      {/* Footer Content Section */}
      <div className="footer-sections">
        {/* Company Info */}
        <div className="company-info">
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="https://wa.me/+918961514680"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links" >
          <h3>Our Company</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Information</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Become a Seller</a></li>
            <li><a href="#">Check Out</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">FAQ Page</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="contact-us" >
          <h3>Contact Us</h3>
          <p>Call: 8961514680</p>
          <p>Email: Liquiveda@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 Liquiveda. All Rights Reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/termsandcondition">Terms & Conditions</Link>
        </p>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </footer>
  );
};

export default Footer;