import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import {getProductById}from '../services/productServices';
import { MdShoppingCart } from "react-icons/md";
import { addToCart } from './sessionStorageHelper'; // Import the helper function
import '../css/productdetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  
  useEffect(()=>{
    const fetchProductById = async()=>{
      try{
        const productData = await getProductById(id);
        setProducts(productData);
      }catch(error){
        setError(error);
      }finally{
        setLoading(false);
      }
    };

    fetchProductById();
  },[id]);

  const handleAddToCart = () => {

    addToCart(product);
    alert('Producto agregado al carrito!');
  };

  if(loading) return <div>Loading...</div>;
  if(error) return <div>Error: {error.message}</div>;
  
  return (
    <div className="product-detail">
      <div className="image-column">
      {product.ps_product_image && product.ps_product_image[0] && (
        <img src={product.ps_product_image[0].imagen_url} alt={product.name} />
      )}
      </div>
      <div className="details-column">
        <h1>{product.name}</h1>
        <p><strong>{product.description}</strong></p>
        <p className="price"><strong>${product.price}</strong></p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          <MdShoppingCart /> Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
