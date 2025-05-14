import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceFeatures.css'; // Import custom styles 

const ServiceFeatures = () => {
  return (
    <div className="service-features container my-5">
      <div className="row text-center">
        <div className="col-md-4 feature-box">
          <div className="icon mb-2">
            <i className="fas fa-shipping-fast"></i> {/* Free Shipping Icon */}
          </div>
          <h5>Free Shipping</h5>
        </div>
        <div className="col-md-4 feature-box">
          <div className="icon mb-2">
            <i className="fas fa-headset"></i> {/* 24/7 Customer Service Icon */}
          </div>
          <h5>24/7 Customer Service</h5>
        </div>
        {/* <div className="col-md-3 feature-box">
          <div className="icon mb-2">
            <i className="fas fa-undo-alt"></i>
          </div>
          <h5>Money back Guarantee</h5>
        </div> */}
        <div className="col-md-4 feature-box">
          <div className="icon mb-2">
            <i className="fas fa-book"></i> {/* Shopping Guide Icon */}
          </div>
          <h5>Shopping Guide</h5>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;