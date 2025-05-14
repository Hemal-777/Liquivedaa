import React from 'react';
import './product.css';
import 'aos/dist/aos.css'; // Ensure AOS styles are imported

const Products = () => {
  return (
    <div className="app-container">
      <div className="left-section">
        <div className="text-container" data-aos="fade-up" data-aos-duration="1000">
          <h2>Products</h2>
        </div>

        <div className="images-container">
          <div className="large-image" data-aos="fade-right" data-aos-duration="1000">
            <img src="https://images.unsplash.com/photo-1668916938366-dd16c56719e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF5dXJ2ZWRhJTIwdW5hbml8ZW58MHx8MHx8fDA%3D" alt="Product 1" />
          </div>
          <div className="small-images" data-aos="fade-left" data-aos-duration="1000">
            <img src="\images\Rectangle 12.png" alt="Product 3" />
          </div>
        </div>
      </div>

      <div className="right-section">
        <img src="https://images.unsplash.com/photo-1726146198281-750e8308f785?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGF5dXJ2ZWRhJTIwdW5hbml8ZW58MHx8MHx8fDA%3D" alt="Product 2" data-aos="fade-left" data-aos-duration="1000" className="right-image" />
        <img src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGF5dXJ2ZWRhJTIwdW5hbml8ZW58MHx8MHx8fDA%3D" alt="Product 5" className="right-image" data-aos="fade-right" data-aos-duration="1000" />
      </div>
    </div>
  );
}

export default Products;