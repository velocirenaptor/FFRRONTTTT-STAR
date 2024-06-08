import React from 'react';
import { Link } from 'react-router-dom';
import '../css/displayproducts.css';

const FilterByID = ({ products, id }) => {
  return (
    <div className="products">
      {products
        .filter(product => product.id === id)
        .map((product) => (
          <Link to={`/product/${product.id}`} className="product-link" key={product.id}>
            <div className="product">
              {product.ps_product_image && product.ps_product_image[0] && (
                <img src={product.ps_product_image[0].imagen_url} alt={product.name} />
              )}
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default FilterByID;
