import React ,{useState,useEffect}from 'react';
import '../css/style.css';
import '../css/displayproducts.css';
import FilteredProducts from '../components/FilteredProducts';
//import { PRODUCTS } from '../components/itemList';
import {getproductByCategory} from '../services/productServices';

function Fundas() {

  const [products , setProduct] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const category= 'cases';

  useEffect(()=>{
    const fetchProducts= async()=>{
      try{
        const products = await getproductByCategory(category);
      
        setProduct(products);
      }catch(error){
        setError(error);
      }finally{
        setLoading(false);
      }
      }
      fetchProducts(); 
    },[category]);

    if(loading) return <div>Loading...</div>;
    if(error)return <div>Error:{error.message}</div>;
   
  return (
    <div>
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="section-title">
            <h2>Fundas</h2>
          </div>
          <FilteredProducts products={products} category="cases" />
        </div>
      </section>
    </div>
  );
};
export default Fundas;
