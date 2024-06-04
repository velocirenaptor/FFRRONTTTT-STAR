import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../css/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='about'>
                <h2>Acerca de Starcases.</h2>
                <p>Somos un emprendimiento pequeño buscando dar salida a la creatividad de nuestros clientes. Basado en Orizaba y la región, envíos a México únicamente.</p>
            </div>
            <div className='subscribe'>
                <div>
                    <h2>¡Únete a nuestro canal de difusión! <a href="https://www.instagram.com/star_cases.e/" className="page-link">Haz Click Aquí</a> </h2>
                </div>
                <div>
                    <h2>Contáctanos</h2>
                    <span><FontAwesomeIcon icon={faPhone} /> 2721006653 </span>
                    <span><FontAwesomeIcon icon={faEnvelope} /> tucorreo@ejemplo.com </span>
                </div>
            </div>
            <div className='copyright'>
                <p>© {currentYear} All Rights Reserved By <a href="https://htmls.design/" className="page-link"> Free Html Templates</a></p>
            </div>
        </footer>
    );
};

export default Footer;
