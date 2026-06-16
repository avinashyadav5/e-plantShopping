import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

  // Calculate total for a single item
  const calculateTotalCost = (item) => {
    return item.cost * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <p>Total items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
      </div>

      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.name} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.cost} per unit</p>
              <div className="cart-item-quantity">
                <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
              </div>
            </div>
            <div className="cart-item-total">
              Subtotal: ${calculateTotalCost(item)}
            </div>
            <button className="delete-btn" onClick={() => handleRemove(item)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
        <div className="cart-actions">
          <button className="continue-btn" onClick={onContinueShopping}>Continue Shopping</button>
          <button className="checkout-btn" onClick={() => alert('Coming Soon!')}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
