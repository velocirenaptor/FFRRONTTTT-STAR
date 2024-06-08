import React,{useEffect, useState} from 'react';
import '../css/style.css';
import '../css/displayproducts.css';
import FilterByID from '../components/FilterByID';
import {getAllProduct}from '../services/productServices'
//import { PRODUCTS } from '../components/itemList';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function DisplayProduct() {
  const [products , setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchProducts = async()=>{
      try{
        const products=  await getAllProduct();
        setProducts(shuffleArray(products));
        console.log(products);
      }catch(error){
        setError(error);
    }finally{
      setLoading(false);
    }
  };
  fetchProducts();
  },[]);



  if(loading) return <div>Loading...</div>;
  if(error)return <div>Error:{error.message}</div>;
  return(
    <div>
      <section className="shop_section layout_padding">
        <div className="container">
          {products.map(product => (
            <FilterByID key={product.id} products={products} id={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
  
//   const idsToShow = ["1", "2", "3", "4", "5"];

//  if(loading) return <div>Loading...</div>;

//   if(error)return <div>Error:{error.message}</div>;
//   return (
//     <div>
//       <section className="shop_section layout_padding">
//         <div className="container">
//           {idsToShow.map(id => (
//             <FilterByID key={id} products={products} id={id} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
}

export default DisplayProduct;
