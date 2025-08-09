import React from 'react';
import './NuestroServicios.css';
import ServicioCard from './ServicioCard';
import ServiciosMobile from './ServiciosMobile';
import servicio1 from '../../assets/servicio_1.webp';
import servicio2 from '../../assets/servicio_2.webp';
import servicio3 from '../../assets/servicio_3.webp';
import servicio4 from '../../assets/servicio_4.webp';
import servicio5 from '../../assets/servicio_5.webp';

const NuestroServicios = () => {
  const servicios = [
    {
      id: 1,
      image: servicio1,
      title: 'Generadores de Energía',
      description: 'Generadores desde 10 hasta 75 KVA, diseñados para brindar energía continua.'
    },
    {
      id: 2,
      image: servicio2,
      title: 'Torres de Iluminación',
      description: 'Disponibles en capacidades de 6, 8 y 10 KVA perfectas para iluminar áreas de trabajo nocturnas o de baja visibilidad.'
    },
    {
      id: 3,
      image: servicio3,
      title: 'Motosoldadores',
      description: ' Con salida de 110 V / 220 V y hasta 400 A, nuestros motosoldadores se ajustan automáticamente a cualquier voltaje (208–575 V).'
    },
    {
      id: 4,
      image: servicio4,
      title: 'Motobombas',
      description: 'De 2 in a 6 in control total de flujo en cualquier terreno. alto rendimiento, control total del flujo y máxima eficiencia operativa.'
    },
    {
      id: 5,
      image: servicio5,
      title: 'Contenedores',
      description: 'Soluciones móviles, seguras y funcionales.  ofrecen espacios cerrados y listos para operar, ideales como oficinas o bodegas en obra.'
    },
  ];

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? (
    <ServiciosMobile servicios={servicios} />
  ) : (
    <section className="nuestro-servicios-section">
      <h1 className="nuestro-servicios-title">NUESTROS SERVICIOS</h1>
      <div className="servicios-container">
        {servicios.map(servicio => (
          <ServicioCard
            key={servicio.id}
            image={servicio.image}
            title={servicio.title}
            description={servicio.description}
            isMobile={isMobile} /* Pass isMobile prop to ServicioCard */
          />
        ))}
      </div>
    </section>
  );
};

export default NuestroServicios;