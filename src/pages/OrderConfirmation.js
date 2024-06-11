import React, { useState, useEffect } from 'react';

function OrderConfirmation() {
    const [orderInfo, setOrderInfo] = useState(null);

    useEffect(() => {
      const storedOrderInfo = localStorage.getItem('orderInfo');
      if (storedOrderInfo) {
        setOrderInfo(JSON.parse(storedOrderInfo));
      }
    }, []);
    

    return (
        <div className="cart">
          <h2>Confirmación del Pedido</h2>
          <h4>¡Gracias por tu compra!</h4>
          {orderInfo && (
        <div>

          <ul>
            {orderInfo.cart.map(item => (
                <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                    <h2>{item.name}</h2>
                    <p>${item.price}</p>
                </div>
                </li>
            ))}
          </ul>
          <h3>Total: ${orderInfo.totalPrice.toFixed(2)}</h3>
          <div className="user-info">
            <h3> {orderInfo.customerInfo}</h3>
          </div>
        </div>
      )}
        </div>
        );
}

export default OrderConfirmation
