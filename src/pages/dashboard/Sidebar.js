import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComment, faWrench, faShoppingCart, faBars, faTimes, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import '../../css/Sidebar.css'; 

const Sidebar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const toggleSidebar = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="sidebar">
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={showLinks ? faTimes : faBars} />
      </button>
      <div className={`content ${showLinks ? 'show' : ''}`}>
        <ul>
          <button className="sidebar-btn" onClick={() => navigateTo("/settings/profile")}>
            <FontAwesomeIcon icon={faUser} className='icon' /> Perfil 
          </button>
          <button className="sidebar-btn" onClick={() => navigateTo("/")}>
            <FontAwesomeIcon icon={faHome} className='icon' /> Home 
          </button>
          <button className="sidebar-btn" onClick={() => navigateTo("/chat")}>
            <FontAwesomeIcon icon={faComment} className='icon' /> Chat 
          </button>
          <button className="sidebar-btn" onClick={() => navigateTo("/cart")}>
            <FontAwesomeIcon icon={faShoppingCart} className='icon' /> Carrito 
          </button>
          <button className="sidebar-btn" onClick={() => navigateTo("/dashboard/settings")}>
            <FontAwesomeIcon icon={faWrench} className='icon' /> Configuración 
          </button>
          <button className="sidebar-btn" onClick={() => navigateTo("/dashboard/admin")}>
          <FontAwesomeIcon icon={faPeopleGroup} className='icon' /> Administradores 
          </button>
        </ul>
        <ul>
        <div className="delete-account">
          <button onClick={() => navigateTo("/settings/delete_account")} className='delete-btn'>
            Borrar Cuenta
          </button>
        </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
