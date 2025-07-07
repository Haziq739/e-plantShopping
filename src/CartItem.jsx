import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, onCheckout }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((sum, item) => sum + (parseFloat(item.cost.replace('$', '')) * item.quantity), 0).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (onContinueShopping) onContinueShopping();
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem({ name: item.name }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return (parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2);
  };

  return (
    <div className="cartList-wrapper">
        <div className="cartList-background"></div>
        <div className="cartList-overlay"></div>
    <div>
      <div className="navbar" style={{backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px'}}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
            <div>
              <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
              <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <h1 className='cart' style={{margin: 0}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path></svg>
            {cart.length > 0 && (<span className="cart_quantity_count">{cart.reduce((acc, item) => acc + (item.quantity || 1), 0)}</span>)}
          </h1>
        </div>
      </div>
      <div className="cart-container">
        <h2 style={{ color: 'white' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
        <div>
          {cart.map(item => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">{item.cost}</div>
                <div className="cart-item-quantity">
                  <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
        <div className="continue_shopping_btn">
          <button className="get-started-button" onClick={onContinueShopping}>Continue Shopping</button>
          <br />
          <button className="get-started-button1" onClick={onCheckout}>Checkout</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartItem;


