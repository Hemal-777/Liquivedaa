import React from 'react';
import './AboutProducts.css'// Import the CSS file

// Store images in an object
const images = {
  mainImg: "https://images.unsplash.com/photo-1545840716-c82e9eec6930?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MTI2NjY5NXx8ZW58MHx8fHx8",
  middleImg: "/images/About Product.png",
};

const AboutProducts = () => {
  return (
    <div className="about-products-container container">
      <div className="row align-items-center">
        <div className="col-md-7 product-images">
          <div className="image-stack">
            <img src={images.mainImg} className="main-img" alt="Tea" />
          </div>
        </div>
        <div className="col-md-5 about-products-text">
          <img src={images.middleImg} className="middle-img" alt="Tea" />
          <h2>About Products</h2>
          <p>
          Liquiveda Clinic is the modern form of the traditional Baquai Dispensary. While we have embraced modernity with time, we have kept centuries-old Unani traditions alive. Even today, medicines in our factory are made using the same ancient Unani methods. The formulas are exactly as they were passed down to us by our ancestors. We are committed to preserving this glorious tradition and want it to benefit the common people.

          We manufacture our medicines in-house, using natural ingredients that are completely chemical-free, in line with the principles of Unani medicine.

          Our goal is to treat patients from the root cause, following the Unani approach of holistic healing. We want patients to leave our clinic not only with the medicine but also with the assurance of being healed.
          </p>
          <a btn className="btn btn-primary" href="/contact" >Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default AboutProducts;