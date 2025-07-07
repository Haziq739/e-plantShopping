import React from 'react';
import './App.css';

const ThankYou = () => (
  <div className="thankyou-page">
    <div className="background-image"></div>
    <div className="thankyou-content">
      <h1>Thank you for Shopping</h1>
      <button className="get-started-button" style={{marginTop: '30px'}} onClick={() => window.location.reload()}>Back to HomePage</button>
    </div>
  </div>
);

export default ThankYou; 