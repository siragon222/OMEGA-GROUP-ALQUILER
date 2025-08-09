import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import logo from '../../assets/logo_omega.svg'; // Importar el logo

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Sección dedicada para el logo, asegurando que esté al principio */}
        <div className="footer-section footer-logo-section">
          <img src={logo} alt="Omega Group Logo" className="footer-logo" />
        </div>

        <div className="footer-section">
          <h3>SÍGUENOS</h3>
          <div className="social-icons">
            <a href="mailto:info@transportesomegagroup.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="mailto:info@transportesomegagroup.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="mailto:info@transportesomegagroup.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="mailto:info@transportesomegagroup.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>CONTACTO</h3>
          <div className="contact-info">
            <FaEnvelope />
            <a href="mailto:info@transportesomegagroup.com">info@transportesomegagroup.com</a>
          </div>
          <div className="contact-info">
            <FaPhoneAlt />
            <p>+57 3144686437</p>
          </div>
        </div>

        {/* La sección de ubicación se mantiene en footer-bottom */}
      </div>
      <div className="footer-bottom">
        <div className="location-info"> {/* Ubicación movida aquí */}
          <FaMapMarkerAlt />
          <p>KILOMETRO 1-VIA ACACIAS-GUAMAL VDA.EL CENTRO</p>
        </div>
        <p>&copy; 2025 Omega group. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;