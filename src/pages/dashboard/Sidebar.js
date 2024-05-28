import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComment, faWrench, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../css/Sidebar.css'; 

const Sidebar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const navigateTo = (path) => {
    window.location.href = path;
  };
  return (
    <div className="sidebar">
      <div className="content">
        <ul>
        <button className="sidebar-btn" onClick={() => navigateTo("/")}>
        <FontAwesomeIcon icon={faHome} className='icon'/> Home 
        </button>

        <button className="sidebar-btn" onClick={() => navigateTo("/profile")}>
        <FontAwesomeIcon icon={faUser} className='icon'/> Perfil 
        </button>
        
        <button className="sidebar-btn" onClick={() => navigateTo("/chat")}>
        <FontAwesomeIcon icon={faComment} className='icon'/> Chat 
        </button>

        <button className="sidebar-btn" onClick={() => navigateTo("/cart")}>
        <FontAwesomeIcon icon={faShoppingCart} className='icon'/> Carrito 
        </button>

        <button className="sidebar-btn" onClick={() => navigateTo("/settings")}>
        <FontAwesomeIcon icon={faWrench}className='icon'/>  Configuración 
        </button>
        </ul>
      </div>
    </div>
  );
};


export default Sidebar;

