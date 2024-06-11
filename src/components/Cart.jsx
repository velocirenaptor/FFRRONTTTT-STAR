// Cart.js
import React, { useState, useEffect } from 'react';
import  { getCart,clearCart } from '../services/cartServices';
import '../css/cart.css';



const Cart = () => {
  const [cart, setCart] = useState({cartItem: []});
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCart = async () => {
    try{
      const cartData = await getCart();
      console.log(cartData.cartItem);
      if(cartData && Array.isArray(cartData.cartItem)){
        setCart(cartData);
        setLoading(false);
        calcularTotal(cartData.cartItem);
      }else{
        setCart({cartItem:[]});
      }
    }catch(error){
      setError(error);
    }finally{
      setLoading(false);
    }
  };
  fetchCart();
  }, []);

  const calcularTotal = (cartItems) => {
    if (!Array.isArray(cartItems)) return 0;
   
    const total = cartItems.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    },0);
  setTotal(total);
  };

  const handleEmptyCart = async () => {
    await clearCart();
    setCart({cartItem:[]});
    setTotal(0);
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="cart">
      <h1>Carrito</h1>
      <ul>
        {cart.cartItem.map((item,index) => (
          <li key={index} className="cart-item">
            <img src={item.product.ps_product_image[0]?.imagen_url} alt={item.product.name} />
            <div>
              <h2>{item.product.name}</h2>
              <p>${parseFloat(item.product.price).toFixed(2)}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
            <button onClick={() => handleRemoveItem(item.id)} className="remove-item-button"><FontAwesomeIcon icon={faXmark} /></button>
          </li>
        ))}
      </ul>
      <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
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
