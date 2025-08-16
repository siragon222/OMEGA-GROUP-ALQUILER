import React, { useState } from 'react';
import Respuesta from './Respuesta';
import './PreguntasFrecuentes.css'; // We will create this file next

const PreguntasFrecuentes = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Disponibilidad de servicios',
      answer: 'Nuestra disponibilidad es inmediata, con capacidad de respuesta las 24 horas, los 7 días de la semana. Gracias a nuestra infraestructura y equipo especializado, garantizamos atención prioritaria y ejecución sin demoras, asegurando que sus operaciones nunca se detengan.'
    },
    {
      id: 2,
      question: 'Soporte técnico y mantenimiento',
      answer: 'Contamos con soporte técnico especializado y mantenimiento preventivo y correctivo, incluyendo calibración y certificación en sitio. Nuestro personal altamente calificado asegura que cada equipo funcione bajo los más altos estándares de calidad y seguridad, optimizando su rendimiento y prolongando su vida útil.'
    },
    {
      id: 3,
      question: 'Traslado de equipos',
      answer: 'Disponemos de flota propia con unidades de cama baja, cama alta y grúa, adaptándonos a las necesidades específicas de cada cliente. Esto nos permite realizar el transporte de sus equipos con total seguridad, puntualidad y cumplimiento normativo, desde cualquier punto y hacia cualquier destino.'
    }
  ];

  const handleQuestionClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleCloseModal = () => {
    setSelectedAnswer(null);
  };

  return (
    <section className="preguntas-frecuentes-section">
      <h1 className="preguntas-frecuentes-title">PREGUNTAS FRECUENTES</h1>
      <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq.id} className="faq-item" onClick={() => handleQuestionClick(faq.answer)}>
            <h2 className="faq-question">{faq.question}</h2>
          </div>
        ))}
      </div>

      {selectedAnswer && (
        <Respuesta
          answer={selectedAnswer}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default PreguntasFrecuentes;
