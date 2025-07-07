
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import CartItem from './CartItem';
import ThankYou from './ThankYou';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
    setShowThankYou(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
    setShowThankYou(false);
  };

  const handleOpenCart = () => {
    setShowCart(true);
    setShowThankYou(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowProductList(true);
    setShowThankYou(false);
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowThankYou(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`} style={{ display: showProductList || showCart || showThankYou ? 'none' : 'block' }}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Paradise Nursery</h1>
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`} style={{ display: showProductList ? 'block' : 'none' }}>
        <ProductList onHomeClick={handleHomeClick} onOpenCart={handleOpenCart} />
      </div>
      <div className={`product-list-container ${showCart ? 'visible' : ''}`} style={{ display: showCart ? 'block' : 'none' }}>
        <CartItem onContinueShopping={handleContinueShopping} onCheckout={handleCheckout} />
      </div>
      <div className={`product-list-container ${showThankYou ? 'visible' : ''}`} style={{ display: showThankYou ? 'block' : 'none' }}>
        <ThankYou />
      </div>
    </div>
  );
}

export default App;



