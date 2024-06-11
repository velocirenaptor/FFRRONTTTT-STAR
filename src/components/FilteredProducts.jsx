import React from 'react';
import { Link } from 'react-router-dom';
import '../css/displayproducts.css';

export const FilteredProducts = ({ products, category }) => {
  console.log(products);
  return(
    <div className="products">
      {products
      .filter(product => product.ps_product_category[0] && product.ps_product_category[0].category.name === category)
      .map((product) => (
          <Link to={`/product/${product.id}`} className="product-link" key={product.id}>
            <div className="product">
              {product.ps_product_image && product.ps_product_image[0] > 0  (
                <img src={product.imagen} alt={product.name} />
              )}
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          </Link> 
        ))}
    </div>
  )
};

//   console.log(products.filter(product => product.ps_product_category[0] && product.ps_product_category[0].category.name === category));
//   return (
//     <div className="products">
//       {products
//       .filter(product => product.ps_product_category[0] && product.ps_product_category[0].category.name === category)
//       .map((product) => (
//           <Link to={`/product/${product.id}`} className="product-link" key={product.id}>
//             <div className="product">
//               {product.ps_product_image && product.ps_product_image[0] && (
//                 <img src={product.ps_product_image[0].imagen_url} alt={product.name} />
//               )}
//               <div className="product-info">
//                 <h3>{product.name}</h3>
//                 <p>${product.price}</p>
//               </div>
//             </div>
//           </Link> 
//         ))}
//     </div>
//   );
// };

export default FilteredProducts;
