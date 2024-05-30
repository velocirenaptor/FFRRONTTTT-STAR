// Cart.js

import React, { useState, useEffect } from 'react';
import { getCart, clearCart } from './sessionStorageHelper'; // Import clearCart
import '../css/cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getCart();
    setCart(storedCart);
  }, []);

  const handleEmptyCart = () => {
    clearCart();
    setCart([]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h1>Carrito</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="cart-total">Total: ${totalPrice.toFixed(2)}</h2>
      <div className="cart-actions">
        <button className="checkout-button">Checkout</button>
        <button onClick={handleEmptyCart} className="empty-cart-button">Empty Cart</button>
      </div>
    </div>
  );
};

export default Cart;
