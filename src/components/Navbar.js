import React from 'react';
import { BrowserRouter, Link, Route, Router } from 'react-router-dom';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShirt, faPalette } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineSmartphone } from "react-icons/md";



const Navbar = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="Navbar">
      <div className="leftSide">
        <img src='https://res.cloudinary.com/dd9lx460j/image/upload/v1715059850/logo3_u3dnzv.png' alt='Starcases' className='Navbar-logo' />
      </div>
      <div className="rightSide">

      <button className="Navbar-link btn" onClick={() => navigateTo("/")}>
          Home <FontAwesomeIcon icon={faHome} />
        </button>

        <button className="Navbar-link btn" onClick={() => navigateTo("/cases")}>
          Fundas <MdOutlineSmartphone />
        </button>

        <button className="Navbar-link btn" onClick={() => navigateTo("/clothing")}>
         Hoodies&Tees <FontAwesomeIcon icon={faShirt} />
        </button>

        <button className="Navbar-link btn" onClick={() => navigateTo("/extras")}>
          Otros <FontAwesomeIcon icon={faPalette} />
        </button>

        <button className='Navbar-link btn' onClick={() => navigateTo("/signup")}>
        Iniciar Sesión <FontAwesomeIcon icon={faUser} />
        </button>
        <span>

        </span>
      </div>
    </nav>
  );
};

function navLink({ to, text }) {
  return <Link className="Navbar-link" to={to}>{text}</Link>;
}


export default Navbar;
