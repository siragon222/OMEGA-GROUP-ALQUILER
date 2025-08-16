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
      description: 'Generadores desde 10 hasta 75 KVA, diseñados para brindar energía continua.',
      titleColor: 'var(--color-white)',
      descriptionColor: 'var(--color-white)',
      gradientFrom: 'rgba(0, 0, 0, 0.603)',
      gradientTo: 'rgba(0, 0, 0, 0)',
      gradientHeight: '40%'
    },
    {
      id: 2,
      image: servicio2,
      title: 'Torres de Iluminación',
      description: 'Disponibles en capacidades de 6, 8 y 10 KVA perfectas para iluminar áreas de trabajo nocturnas o de baja visibilidad.',
      titleColor: 'var(--color-black)',
      descriptionColor: 'var(--color-black)',
      gradientFrom: 'rgba(255, 255, 255, 0.7)',
      gradientTo: 'rgba(255, 255, 255, 0)',
      gradientHeight: '55%'
    },
    {
      id: 3,
      image: servicio3,
      title: 'Motosoldadores',
      description: ' Con salida de 110 V / 220 V y hasta 400 A, nuestros motosoldadores se ajustan automáticamente a cualquier voltaje (208–575 V).',
      titleColor: 'var(--color-white)',
      descriptionColor: 'var(--color-white)',
      gradientFrom: 'rgba(0, 0, 0, 0.6)',
      gradientTo: 'rgba(0, 0, 0, 0)',
      gradientHeight: '40%'
    },
    {
      id: 4,
      image: servicio4,
      title: 'Motobombas',
      description: 'De 2 in a 6 in control total de flujo en cualquier terreno. alto rendimiento, control total del flujo y máxima eficiencia operativa.',
      titleColor: 'var(--color-black)',
      descriptionColor: 'var(--color-black)',
      gradientFrom: 'rgba(255, 255, 255, 0.7)',
      gradientTo: 'rgba(255, 255, 255, 0)',
      gradientHeight: '55%'
    },
    {
      id: 5,
      image: servicio5,
      title: 'Contenedores',
      description: 'Soluciones móviles, seguras y funcionales.  ofrecen espacios cerrados y listos para operar, ideales como oficinas o bodegas en obra.',
      titleColor: 'var(--color-white)',
      descriptionColor: 'var(--color-white)',
      gradientFrom: 'rgba(0, 0, 0, 0.6)',
      gradientTo: 'rgba(0, 0, 0, 0)',
      gradientHeight: '40%'
    },
  ];

  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches;
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    // Ensure initial value is correct
    setIsMobile(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Fallback for older browsers
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
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
            titleColor={servicio.titleColor}
            descriptionColor={servicio.descriptionColor}
            gradientFrom={servicio.gradientFrom}
            gradientTo={servicio.gradientTo}
            gradientHeight={servicio.gradientHeight}
            isMobile={isMobile} /* Pass isMobile prop to ServicioCard */
          />
        ))}
      </div>
      <button className="servicios-contact-button" onClick={() => {
        const phone = '573144686437';
        const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios de Alquiler de Maquinaría');
        const url = `https://wa.me/${phone}?text=${message}`;
        window.open(url, '_blank', 'noopener');
      }}>
        Solicita tu cotización
      </button>
    </section>
  );
};

export default NuestroServicios;