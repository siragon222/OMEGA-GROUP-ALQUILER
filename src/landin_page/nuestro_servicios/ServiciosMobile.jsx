import React, { useState, useEffect } from 'react';
import './ServiciosMobile.css';
import ServicioCard from './ServicioCard';

const ServiciosMobile = ({ servicios }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic card rotation
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentIndex(prev => (prev === servicios.length - 1 ? 0 : prev + 1));
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(cardInterval);
  }, [servicios.length]);

  return (
    <div className="servicios-mobile-container">
      <h1 className="servicios-mobile-title">NUESTROS SERVICIOS</h1>
      
      <div 
        className="carousel-container"
        aria-live="polite" /* Announce changes to screen readers */
        aria-roledescription="carousel" /* Describe the carousel */
      >
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {servicios.map((servicio, index) => (
            <div 
              key={servicio.id} 
              className="carousel-slide"
              aria-hidden={index !== currentIndex} /* Hide non-active slides from screen readers */
            >
              <ServicioCard
                image={servicio.image}
                title={servicio.title}
                description={servicio.description}
                titleColor={servicio.titleColor}
                descriptionColor={servicio.descriptionColor}
                gradientFrom={servicio.gradientFrom}
                gradientTo={servicio.gradientTo}
                gradientHeight={servicio.gradientHeight}
                // Directly control description visibility based on current slide
                isVisible={index === currentIndex}
                isMobile={true}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pagination-dots">
        {servicios.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>

      <button
        className="servicios-mobile-contact-button"
        onClick={() => {
          const phone = '573144686437';
          const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios de Alquiler de Maquinaría');
          const url = `https://wa.me/${phone}?text=${message}`;
          window.open(url, '_blank', 'noopener');
        }}
      >
        Solicita tu cotización
      </button>
    </div>
  );
};

export default ServiciosMobile;