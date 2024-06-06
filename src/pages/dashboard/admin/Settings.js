import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import DropdownMenu from '../../../components/DropdownMenu'
import {PRODUCTS} from '../../../components/itemList';
import './Settings.css'

const Settings = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { value: 'cases', label: 'Fundas' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'extras', label: 'Otros' },
  ];

  return (
    <div className='settings'>
      <Sidebar />
      <div className='settings-container'>
        <h1>
          Ajustes de Administrador
        </h1>
        <div className='add-item'>
          <h2>
            Agregar producto
          </h2>

          <div className='item'>
            <label htmlFor='product-name'>Nombre del Producto</label>
            <input type="text" placeholder='Nombre del producto' />
          </div>

          <div className='description'>
            <label htmlFor='description'>Descripción</label>
            <input type="text" placeholder='Descripción de producto' />
          </div>

          <div>
            <label htmlFor='price'>Precio</label>
            <input type="text" placeholder='Precio' />
          </div>

          <div className='image'>
            <label htmlFor='image'>Imagen</label>
            <input type="file" />
          </div>
          
          <div className='category'>
            <label htmlFor='category'>Categoría</label>
            <DropdownMenu
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>

          <button className='add-product' onClick={() => { alert ('Se ha creado el producto.')}}> Añadir Producto</button>
        </div>
        <div className='delete-item'>
          <h2>
            Editar Productos
          </h2>

          <div className='item-list'>
            <ul>
            <li className='list-header'>
                  <h4>
                    <span>Imagen</span>
                    <span>Nombre</span>
                    <span>Precio</span>
                    <span>Categoría</span>
                    <span>Acciones</span>
                  </h4>
                </li>
            </ul>
            <ul>
              {PRODUCTS.map((product) => (

                <li key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <span>
                  {product.name}
                  </span>
                  <span>
                  {product.price}
                  </span>
                  <span>
                  {product.category}
                  </span>
                  <div className='btn'>
                  <button className='edit-product'>Editar</button>
                  <button className='remove-product'>Remover</button>
                  <button className='delete-product'>Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;