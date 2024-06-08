import React from 'react';
import { useParams } from 'react-router-dom';
import {getProductById}from '../services/productServices';
//import {PRODUCTS} from '../components/itemList';
import { MdShoppingCart } from "react-icons/md";
import { addToCart } from './sessionStorageHelper'; // Import the helper function
import '../css/productdetail.css';

function ProductDetail() {
  const { id } = useParams();
  //const product = PRODUCTS.find(product => product.id === id);
  const product = getProductById(id);
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Producto agregado al carrito!');
  };

  return (
    <div className="product-detail">
      <div className="image-column">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details-column">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          <MdShoppingCart /> Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
