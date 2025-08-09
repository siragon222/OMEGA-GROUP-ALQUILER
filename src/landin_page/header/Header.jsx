import React, { useEffect, useState } from 'react';
import './Header.css';
import logoOmega from '../../assets/logo_omega.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <img 
        src={logoOmega}
        alt="Logo Omega Transportes" 
        className="logo"
      />
    </header>
  );
};

export default Header;