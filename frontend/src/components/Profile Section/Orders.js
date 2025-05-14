// Orders.js
import React from 'react';
import './Orders.css';

const Orders = () => {
  return (
    <div className="orders">
      <h2>Your Orders</h2>
      <div className="order-item">
        <p><strong>Order #12345</strong></p>
        <p>Date: 2024-09-10</p>
        <p>Status: Delivered</p>
      </div>
      <div className="order-item">
        <p><strong>Order #67890</strong></p>
        <p>Date: 2024-08-25</p>
        <p>Status: In Transit</p>
      </div>
    </div>
  );
};

export default Orders;
