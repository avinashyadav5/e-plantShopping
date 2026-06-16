import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cartItems.forEach((item) => {
      totalAmount += item.cost * item.quantity;
    });
    return totalAmount;
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return item.cost * item.quantity;
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    // Increment the quantity of the item
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    // Completely remove the item from the cart
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
        <h3 className="total-cart-amount">Total Cart Amount: ${calculateTotalAmount()}</h3>
        <div className="cart-actions">
          <button className="continue-btn" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
          <button className="checkout-btn" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
