import React from 'react';
import '../css/style.css';
import '../css/product.css';
import DisplayProduct from '../components/DisplayProduct';

function Fundas() {

  return (
    <div>
      <section className="shop_section layout_padding">
      <div className="heading_container heading_center">
        <h2>Fundas Personalizadas</h2>
      </div>
      </section>
      <div>
        <DisplayProduct />
      </div>
    </div>
  );
}

export default Fundas;