import React, { useState } from 'react';

const AdminCreator = () => {
  const [adminData, setAdminData] = useState(null);

  const mockCreateAdmin = () => {
    const user = generateRandomUser();
    const token = generateRandomToken();
    const url = generateRandomUrl();
    setAdminData({ user, token, url });
  };

  const generateRandomUser = () => {
    return `admin${Math.random().toString(36).substr(2, 5)}`;
  };

  const generateRandomToken = () => {
    return Math.random().toString(36).substr(2, 10);
  };

  const generateRandomUrl = () => {
    return `http://localhost:3000/register/${Math.random().toString(36).substr(2, 8)}`;
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div>
      <h1>Crear nuevo administrador</h1>
      <p>Al presionar el botón se generará un usuario y token de registro.</p>
      <button className='admin-btn' onClick={mockCreateAdmin}>Crear administrador</button>
      {adminData && (
        <div>
          <h2>Datos del nuevo administrador</h2>
          <p>Usuario: {adminData.user} <button onClick={() => handleCopy(adminData.user)}>Copiar</button></p>
          <p>Token: {adminData.token} <button onClick={() => handleCopy(adminData.token)}>Copiar</button></p>
          <p>URL de registro: {adminData.url} <button onClick={() => handleCopy(adminData.url)}>Copiar</button></p>
        </div>
      )}
    </div>
  );
};

export default AdminCreator;
