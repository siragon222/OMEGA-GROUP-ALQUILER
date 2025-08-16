import React, { useRef, useEffect, useState } from 'react';
import './PortadaSlider.css';
import videoPresentacion from '../../assets/video_presentacion.mp4';

const PortadaSlider = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Configuración inicial del video
    videoElement.playsInline = true;
    videoElement.loop = true;
    videoElement.preload = 'auto';

    // Crear el observador de intersección
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting && hasInteracted) {
          // Intenta reproducir con sonido cuando es visible y ha habido interacción
          videoElement.muted = false;
          videoElement.play().catch(() => {
            // Si falla la reproducción con sonido, intenta en silencio
            videoElement.muted = true;
            videoElement.play();
          });
        } else {
          // Pausa el video cuando no es visible
          videoElement.pause();
        }
      },
      {
        threshold: 0.5 // El video se considera visible cuando al menos 50% está en pantalla
      }
    );

    observer.observe(videoElement);

    // Limpieza al desmontar
    return () => {
      observer.unobserve(videoElement);
      videoElement.pause();
    };
  }, [hasInteracted]);

  // Manejador de interacción del usuario
  const handleUserInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      const videoElement = videoRef.current;
      if (videoElement && isVisible) {
        videoElement.muted = false;
        videoElement.play().catch(() => {
          videoElement.muted = true;
          videoElement.play();
        });
      }
    }
  };

  

  return (
    <div 
      className="portada-slider-container"
      onClick={handleUserInteraction}
      onKeyDown={handleUserInteraction}
      role="presentation"
    >
      <div className="video-box">
        <video
          ref={videoRef}
          className="background-video"
          src={videoPresentacion}
          muted // Inicialmente silenciado para permitir autoplay
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
        {!hasInteracted && isVisible && (
          <div className="video-overlay">
            <button 
              className="unmute-button"
              onClick={handleUserInteraction}
              aria-label="Reproducir video"
            >
              <svg className="play-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8 5v14l11-7z"/>
              </svg>
              Reproducir video
            </button>
          </div>
        )}
      </div>

      <h1 className="main-title">
        Potenciamos tu obra y tus ideas con maquinaria confiable y contenedores diseñados para durar.
      </h1>

      <p className="company-description">
        En Omega Group SAS conectamos innovación, funcionalidad y eficiencia. Alquilamos maquinaria de alto rendimiento y fabricamos contenedores modulares adaptados a múltiples usos: desde oficinas móviles hasta experiencias únicas tipo glamping.
      </p>

      
    </div>
  );
};

export default PortadaSlider;