import React from 'react'
import PRODUCTS from '../components/itemList';
import {Product} from '../components/Product';
import '../css/displayproducts.css'

const DisplayProduct = () => {
  return (
    <div>
            <div className="products">
        {""}
        {PRODUCTS.map((product) =>
        <Product data={product} /> )}
        </div>
    </div>
  )
}

export default DisplayProduct
