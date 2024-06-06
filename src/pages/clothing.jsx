import React from 'react'
import '../css/style.css';
import '../css/displayproducts.css';
import FilteredProducts from '../components/FilteredProducts';
import { PRODUCTS } from '../components/itemList';

function Clothing() {
  return (
    <div>
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="section-title">
            <h2>Fundas</h2>
          </div>
          <FilteredProducts products={PRODUCTS} category="clothing" />
        </div>
      </section>
    </div>
  );
}
export default Clothing;
