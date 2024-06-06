import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../css/creator.css';

const AdminCreator = () => {
  const [adminData, setAdminData] = useState(null);
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedToken, setCopiedToken] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

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

  const handleCopy = (text, setStateFunc) => {
    navigator.clipboard.writeText(text);
    setStateFunc(true); // Set as copied
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setStateFunc(false);
    }, 2000);
  };

  const handleCopyAndNavigate = (text, setStateFunc) => {
    navigator.clipboard.writeText(text);
    setStateFunc(true); // Set as copied
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setStateFunc(false);
    }, 2000);
  };

  return (
    <div>
      <h1>Crear nuevo administrador</h1>
      <p>Al presionar el botón se generará un usuario y token de registro.</p>
      <button className='admin-btn' onClick={mockCreateAdmin}>Crear administrador</button>
      {adminData && (
        <div>
          <h2>Datos del nuevo administrador</h2>
          <p>Usuario:
          <span />
             {adminData.user}
             <p>
             <button className='copy-btn' onClick={() => handleCopy(adminData.user, setCopiedUser)}>{copiedUser ? <><FontAwesomeIcon icon={faCheck} /> Copiado</> : 'Copiar'}</button></p>
            </p>
          <p>Token:
          <span />
              {adminData.token} 
            <p>
              <button className='copy-btn' onClick={() => handleCopy(adminData.token, setCopiedToken)}>{copiedToken ? <><FontAwesomeIcon icon={faCheck} /> Copiado</> : 'Copiar'}</button></p>
          </p>
          <p>URL de registro: 
          <span />
            {adminData.url}
            <p>
            <button className='copy-btn' onClick={() => handleCopyAndNavigate(adminData.url, setCopiedUrl)}>{copiedUrl ? <><FontAwesomeIcon icon={faCheck} /> Copiado</> : 'Copiar'}</button></p>
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminCreator;
