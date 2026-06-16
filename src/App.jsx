import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const cartItems = useSelector(state => state.cart.items);
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderNavbar = () => (
    <div className="navbar">
      <div className="nav-logo" onClick={() => navigateTo('landing')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
        <h3>Paradise Nursery</h3>
      </div>
      <div className="nav-links">
        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('landing'); }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('products'); }}>Plants</a>
        <div className="cart-icon-container" onClick={() => navigateTo('cart')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="21" r="1"/>
            <circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
          {totalCartQuantity > 0 && <span className="cart-quantity">{totalCartQuantity}</span>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      {currentPage === 'landing' ? (
        <div className="landing-page">
          <div className="landing-content">
            <div className="landing-content-left">
              <h1>Paradise Nursery</h1>
              <div className="divider" style={{ width: '60px', height: '4px', margin: '20px auto', backgroundColor: 'var(--primary-light)' }}></div>
              <p style={{ fontSize: '1.2rem' }}>Where Green Meets Serenity</p>
              <button className="get-started-btn" onClick={() => navigateTo('products')}>
                Get Started
              </button>
            </div>
            <div className="divider"></div>
            <div className="landing-content-right">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <>
          {renderNavbar()}
          {currentPage === 'products' && <ProductList />}
          {currentPage === 'cart' && <CartItem onContinueShopping={() => navigateTo('products')} />}
        </>
      )}
    </div>
  );
}

export default App;
