import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import AdminCreator from '../../../components/AdminCreator'; // Importamos el componente AdminCreator
import './admin.css';
import ADMINS from '../../../components/AdminList';

export default function Admin() {
  const [selectedOption, setSelectedOption] = useState('');
  const [admins, setAdmins] = useState([]);

  return (
    <div className='admin-container'>
      <Sidebar />
      <div className='admin-content'>
        <h2>Administradores</h2>
        <p>Lista de administradores</p>
        <ul>
          {ADMINS.map((admin) => (
            <li key={admin.id}>
              <img src={admin.picture} alt={admin.name} />
              <span>{admin.name}</span>
              <span>{admin.email}</span>
              <div className='btn'>
                <button className='edit-admin'>Editar Permisos</button>
                <button className='remove-admin'>Remover</button>
              </div>
            </li>
          ))}
        </ul>
        <AdminCreator />
      </div>
    </div>
  );
}
