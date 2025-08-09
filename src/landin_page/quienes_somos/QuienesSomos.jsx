import React, { useState, useEffect, useRef } from 'react';
import './QuienesSomos.css';

// Importar las imágenes y SVGs
// Asegúrate de que estas rutas sean correctas y que los archivos existan en tu carpeta assets
import Ima1Svg from '../../assets/Ima_1.svg';
import Ima2Svg from '../../assets/Ima_2.svg';
import Ima3Svg from '../../assets/Ima_3.svg';
// Asumiendo que las imágenes de la galería se llaman gallery_image_1.jpg, gallery_image_2.jpg, gallery_image_3.jpg
import GalleryImage1 from '../../assets/gallery_image_1.webp';
import GalleryImage2 from '../../assets/gallery_image_2.webp';
import GalleryImage3 from '../../assets/gallery_image_3.webp';

const galleryImages = [GalleryImage1, GalleryImage2, GalleryImage3];

const QuienesSomos = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);

  const descriptionRef = useRef(null);
  const benefitsRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % galleryImages.length
      );
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 }; // Ajusta el umbral para una mejor detección de visibilidad

    const columns = [descriptionRef.current, benefitsRef.current, galleryRef.current];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Cuando el contenedor principal es visible, dispara las animaciones en cascada
          columns.forEach((col, index) => {
            if (col) {
              const delay = index * 200; // Retraso de 200ms entre cada columna
              setTimeout(() => {
                if (col === descriptionRef.current) setDescriptionVisible(true);
                else if (col === benefitsRef.current) setBenefitsVisible(true);
                else if (col === galleryRef.current) setGalleryVisible(true);
              }, delay);
            }
          });
          observer.disconnect(); // Desconectar después de que todas las animaciones se han disparado
        }
      });
    }, observerOptions);

    // Observar el contenedor de las columnas en lugar de cada columna individualmente
    if (descriptionRef.current && descriptionRef.current.parentElement) {
      observer.observe(descriptionRef.current.parentElement);
    }

    return () => {
      if (descriptionRef.current && descriptionRef.current.parentElement) {
        observer.unobserve(descriptionRef.current.parentElement);
      }
    };
  }, []);

  return (
    <section className="quienes-somos-container">
      <h1 className="quienes-somos-title">¿Quiénes somos?</h1>

      <div className="content-columns">
        <div ref={descriptionRef} className={`column description-column ${descriptionVisible ? 'animate-slide-up' : ''}`}>
          <h2 className="description-title">En Omega Group S.A.S, nacimos en 2019 con un propósito claro:</h2>
          <p className="description-text">
          Darle a cada cliente una solución confiable, rápida y funcional que realmente responda a las exigencias del terreno. Desde entonces, hemos sido más que una empresa: somos aliados estratégicos que se comprometen con cada obra como si fuera propia.
          </p>
        </div>

        <div ref={benefitsRef} className={`column benefits-column ${benefitsVisible ? 'animate-slide-up' : ''}`}>
          <ul className="benefits-list">
            <li>
              <img src={Ima1Svg} alt="Icono" className="benefit-icon" />
              <span>Que tu operación no se detenga.</span>
            </li>
            <li>
              <img src={Ima2Svg} alt="Icono" className="benefit-icon" />
              <span>Que encuentres en nosotros soluciones listas para operar.</span>
            </li>
            <li>
              <img src={Ima3Svg} alt="Icono" className="benefit-icon" />
              <span>Que ahorres tiempo, redujeras costos y avances sin excusas.</span>
            </li>
          </ul>
        </div>

        <div ref={galleryRef} className={`column gallery-column ${galleryVisible ? 'animate-slide-up' : ''}`}>
          <div className="gallery-box">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Galería ${index + 1}`}
                className={`gallery-image ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;