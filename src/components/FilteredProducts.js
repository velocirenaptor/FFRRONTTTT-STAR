import React from 'react';
import { Link } from 'react-router-dom';
import '../css/displayproducts.css';

const FilteredProducts = ({ products, category }) => {
  return (
    <div className="products">
      {products.filter(product => product.category === category).map((product) => (
        <Link to={`/product/${product.id}`} className="product-link" key={product.id}>
          <div className="product">
            <img src={product.image} alt={product.name} />
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

export default FilteredProducts;
