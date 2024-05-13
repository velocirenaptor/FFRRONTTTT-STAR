import React from 'react'
import '../css/product.css'

export const Product = (props) => {
    const {id, name, description, price, image} = props.data;
    return <div className='product'>
        <img src={image} alt={name} />
        <div className='description'>
            <p>
                <b>{name}</b>
            </p>
            <p>${price}</p>
             </div>
        </div>
}
