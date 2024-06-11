import React, { useState, useEffect } from 'react';
import { getCart, clearCart, removeFromCart } from './sessionStorageHelper';
import '../css/cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const [customerInfo, setCustomerInfo] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getCart();
    setCart(storedCart);
  }, []);

  const handleEmptyCart = () => {
    clearCart();
    setCart([]);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
    setCart(cart.filter(item => item.id !== itemId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const isOrderReady = customerInfo.trim() !== '';

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const handleSendOrder = () => {
    // Guardar los datos de la orden en localStorage
    localStorage.setItem('orderInfo', JSON.stringify({ customerInfo, cart, totalPrice }));
    
    // Redirigir a la página de confirmación del pedido
    navigateTo("/order-confirmation");
  };

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
            <button onClick={() => handleRemoveItem(item.id)} className="remove-item-button"><FontAwesomeIcon icon={faXmark} /></button>
          </li>
        ))}
      </ul>
      <h2 className="cart-total">Total: ${totalPrice.toFixed(2)}</h2>
      <input
        type="text"
        placeholder="Introduce tu información..."
        value={customerInfo}
        onChange={(e) => setCustomerInfo(e.target.value)}
      />
      <div className="cart-actions">
        <button
          className={`checkout-button ${isOrderReady ? '' : 'disabled'}`}
          onClick={handleSendOrder}
          disabled={!isOrderReady}
        >
          Enviar Pedido
        </button>
        <button onClick={handleEmptyCart} className="empty-cart-button">Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;
