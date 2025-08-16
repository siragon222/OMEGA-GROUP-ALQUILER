import React, { useRef, useEffect, useState } from 'react';
import './NuestrosClientes.css';
import numero6Webp from '../../assets/numero-6.webp';
import cliente1Svg from '../../assets/cliente_1.svg';
import cliente2Svg from '../../assets/cliente_2.svg';
import cliente3Svg from '../../assets/cliente_3.svg';
import cliente4Svg from '../../assets/cliente_4.svg';
import fondo from '../../assets/fondo.webp';

const NuestrosClientes = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const fullText = "6 años de experiencia respaldando obras con soluciones listas para operar.";

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setImageVisible(true);
        }
      });
    }, observerOptions);

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTextVisible(true);
        }
      });
    }, observerOptions);

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }
    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, []);

  // Removed useEffect for typing animation

  return (
    <section
      className="nuestros-clientes-section"
      style={{
        backgroundImage: `linear-gradient(to bottom, var(--color-black) 0%, rgba(0,0,0,0) 35%), url(${fondo})`,
        backgroundSize: 'cover, cover',
        backgroundPosition: 'top center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      <div className="image-container">
        <img
          ref={imageRef}
          src={numero6Webp}
          alt="6 años de experiencia"
          className={`top-image ${imageVisible ? 'slide-up-text' : ''}`}
        />
      </div>
      <p
        ref={textRef}
        className={`description-text ${textVisible ? 'slide-up-text' : ''}`}
      >
        {fullText}
      </p>

      <h2 className="section-title">NUESTROS CLIENTES</h2>

      <div className="logos-container">
        <img src={cliente1Svg} alt="Logo Cliente 1" className="client-logo" />
        <img src={cliente2Svg} alt="Logo Cliente 2" className="client-logo" />
        <img src={cliente3Svg} alt="Logo Cliente 3" className="client-logo" />
        <img src={cliente4Svg} alt="Logo Cliente 4" className="client-logo" />

      </div>
    </section>
  );
};

export default NuestrosClientes;