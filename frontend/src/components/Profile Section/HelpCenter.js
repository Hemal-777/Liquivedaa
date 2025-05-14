// HelpCentre.js
import React from 'react';
import './HelpCentre.css';

const HelpCentre = () => {
  return (
    <div className="help-centre">
      <h2>Help Centre</h2>
      <div className="help-section">
        <p><strong>How can we help you?</strong></p>
        <p>If you need assistance, please contact our support team at support@ecommerce.com.</p>
      </div>
      <div className="help-section">
        <p><strong>Frequently Asked Questions:</strong></p>
        <ul>
          <li>How to return an item?</li>
          <li>How to track my order?</li>
          <li>How to change my account information?</li>
        </ul>
      </div>
    </div>
  );
};

export default HelpCentre;
