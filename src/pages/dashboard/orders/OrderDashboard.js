import React from 'react';
import Sidebar from '../Sidebar';
import './orderlist.css';
import ORDERS from '../../../components/OrderList';

export default function OrderDashboard() {
  return (
    <div className='order-container'>
      <Sidebar />
      <div className='order-content'>
        <h1>Órdenes</h1>
        <p>Lista de órdenes</p>
        {ORDERS.map((order) => (
          <div key={order.id} className="order-wrapper">
            <h2 className="order-title">Cliente: {order.username}</h2>
            <ul className="order-list">
              <li>
                <span>Order ID: {order.id}</span>
              </li>
              <li>
                <span>Total: ${order.total}</span>
              </li>
            </ul>
            <div className='order-items'>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="order-buttons">
                <button className='btn-confirm'>Confirmar orden</button>
                <button className='btn-cancel'>Cancelar orden</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
