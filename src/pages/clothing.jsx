import React from 'react'
import DisplayProduct from '../components/DisplayProduct';

function Clothing() {
  return (
    <div>
  <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Hoodies &amp; Tees</h2>
      </div>
      <DisplayProduct />
    </div>
  </section>
    </div>
  )
}

export default Clothing;
