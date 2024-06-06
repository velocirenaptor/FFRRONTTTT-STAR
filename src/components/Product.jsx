import React from 'react'
import { Link } from 'react-router-dom';
import '../css/product.css'
import {getAllProducto,getProductById} from '../services/productServices';



export const Product = (props) => {
    const {id, name, description, price, image} = props.data;
    return <div className='product'>
        <Link to={`/product/${id}`} className='product-link'>
        <img src={image} alt={name} />
        <div className='description'>
            <p>
                <b>{name}</b>
            </p>
            <p>${price}</p>
             </div>
        </Link>
        </div>
}
