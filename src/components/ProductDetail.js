import React from 'react';
import { useParams } from 'react-router-dom';
import PRODUCTS from '../components/itemList';
import { MdShoppingCart } from "react-icons/md";
import '../css/productdetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(product => product.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <div className="image-column">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details-column">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="add-to-cart-button"><MdShoppingCart /> Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default ProductDetail;
