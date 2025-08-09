import React, { useRef, useEffect, useState } from 'react';
import './PortadaSlider.css'; // Asumiendo que crearás un archivo CSS para los estilos
import videoPresentacion from '../../assets/video_presentacion.mp4';

const PortadaSlider = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Intento de autoplay con sonido primero; si el navegador lo bloquea, cae a silenciado
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Asegurar flags requeridos para autoplay en móviles/iOS
    videoElement.playsInline = true;
    videoElement.muted = isMuted;

    const tryPlayWithSoundFirst = () => {
      // Intentar reproducir con sonido
      videoElement.muted = false;
      return videoElement
        .play()
        .then(() => {
          setIsMuted(false);
          setIsPlaying(true);
        })
        .catch(() => {
          // Si falla, reproducir en silencio como fallback
          videoElement.muted = true;
          setIsMuted(true);
          return videoElement
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
        });
    };

    if (videoElement.readyState >= 2) {
      tryPlayWithSoundFirst();
    } else {
      const onCanPlay = () => {
        tryPlayWithSoundFirst();
      };
      videoElement.addEventListener('canplay', onCanPlay, { once: true });
      return () => {
        videoElement.removeEventListener('canplay', onCanPlay);
      };
    }
  }, []);

  // Sincroniza el estado de mute con el elemento de video cuando cambie
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // En el primer gesto del usuario, desmutear si está silenciado por bloqueo del navegador
  useEffect(() => {
    if (!isMuted) return;

    const unmuteOnGesture = () => {
      const el = videoRef.current;
      if (!el) return;
      el.muted = false;
      setIsMuted(false);
      el.play().catch(() => {});
    };

    window.addEventListener('pointerdown', unmuteOnGesture, { once: true });
    window.addEventListener('keydown', unmuteOnGesture, { once: true });

    return () => {
      window.removeEventListener('pointerdown', unmuteOnGesture);
      window.removeEventListener('keydown', unmuteOnGesture);
    };
  }, [isMuted]);

  // Función para manejar la visibilidad del video y su reproducción
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0 } // Reproduce mientras al menos una parte sea visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Aquí se integrará la lógica para abrir WhatsApp
    // Necesitaré el número de teléfono y el mensaje predefinido para completarlo.
    alert('Funcionalidad de WhatsApp pendiente de configuración.');
  };

  // Ya no se usa botón; el sonido se intenta activar automáticamente

  return (
    <div className="portada-slider-container">
      <div className="video-box">
        <video
          ref={videoRef}
          className="background-video"
          src={videoPresentacion} // Ruta relativa al archivo de video
          muted={isMuted}
          autoPlay
          loop
          playsInline // Importante para autoplay en iOS
          preload="auto"
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
        {/* Sin botón: el sonido se intentará activar automáticamente y con el primer gesto del usuario si es necesario */}
      </div>

      <h1 className="main-title">
        Potenciamos tu obra y tus ideas con maquinaria confiable y contenedores diseñados para durar.
      </h1>

      <p className="company-description">
        En Omega Group SAS conectamos innovación, funcionalidad y eficiencia. Alquilamos maquinaria de alto rendimiento y fabricamos contenedores modulares adaptados a múltiples usos: desde oficinas móviles hasta experiencias únicas tipo glamping.
      </p>

      <button className="contact-button" onClick={handleWhatsAppClick}>
        Solicita tu cotización
      </button>
    </div>
  );
};

export default PortadaSlider;