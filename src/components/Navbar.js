import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';  // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShirt, faPalette, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineSmartphone, MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="Navbar">
      <div className="leftSide">
        <img src='https://res.cloudinary.com/dd9lx460j/image/upload/v1715059850/logo3_u3dnzv.png' alt='Starcases' className='Navbar-logo' onClick={() => navigateTo("/")} />
      </div>
      <div className={`rightSide ${showLinks ? "show" : ""}`}>
        <button className="Navbar-link btn" onClick={() => navigateTo("/")}>
          Home <FontAwesomeIcon icon={faHome} className='icon'/>
        </button>
        <button className="Navbar-link btn" onClick={() => navigateTo("/cases")}>
          Fundas <MdOutlineSmartphone className='icon' />
        </button>
        <button className="Navbar-link btn" onClick={() => navigateTo("/clothing")}>
          Hoodies&Tees <FontAwesomeIcon icon={faShirt} className='icon' />
        </button>
        <button className="Navbar-link btn" onClick={() => navigateTo("/extras")}>
          Otros <FontAwesomeIcon icon={faPalette} className='icon' />
        </button>
        <button className='Navbar-link btn' onClick={() => navigateTo("/signup")}>
          Iniciar Sesión <FontAwesomeIcon icon={faUser} className='icon'/>
        </button>
        <button className='Navbar-link btn' onClick={() => navigateTo("/cart")}>
          Carrito <MdShoppingCart className='icon'/>
        </button>
        <button className='Navbar-link btn' onClick={() => navigateTo("/settings/profile")}>
          Perfil <FontAwesomeIcon icon={faUser} className='icon'/>
        </button>
      </div>
      <button className="btn menu" onClick={() => setShowLinks(!showLinks)}>
        <FontAwesomeIcon icon={showLinks ? faTimes : faBars} />
      </button>
    </nav>
  );
};

export default Navbar;
