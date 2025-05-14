import React from 'react';
import './Banner.css'; // Import the custom CSS

const Banner = () => {
  return (
    <section className="banner bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Move the h1 tag to the top of the banner */}
          <div class="buuu d-flex flex-column justify-content-center">
          <h1 className="banner-title">The Ayurvedic & Unani Way of Life</h1>
          <h1  className="banner-title">100+ Years of Legacy</h1></div>
          <div className="col-md-9 banner-content text-start">
            {/* <div className="banner-text">
              
              <p>Products are delivered in West Bengal, Bihar, Jharkhand, Uttar Pradesh</p>
            </div> */}
            <a href="/products" className=" ban btn btn-success btn-lg mt-3" style={{ fontSize: '24px', fontWeight: 'bold' }}>Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;