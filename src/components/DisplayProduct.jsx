import React from 'react';
import '../css/style.css';
import '../css/displayproducts.css';
import FilterByID from '../components/FilterByID';
import { PRODUCTS } from '../components/itemList';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function DisplayProduct() {
  const shuffledProducts = shuffleArray(PRODUCTS.slice());
  
  const idsToShow = ["1", "2", "3", "4", "5"];
  
  return (
    <div>
      <section className="shop_section layout_padding">
        <div className="container products">
          {idsToShow.map(id => (
            <FilterByID key={id} products={shuffledProducts} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default DisplayProduct;
