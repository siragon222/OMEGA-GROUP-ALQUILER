import React, { useState } from 'react';
import Respuesta from './Respuesta';
import './PreguntasFrecuentes.css'; // We will create this file next

const PreguntasFrecuentes = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const faqs = [
    {
      id: 1,
      question: '¿Cuál es el horario de atención al cliente?',
      answer: 'Nuestro equipo de soporte está disponible de lunes a viernes de 9:00 AM a 6:00 PM.'
    },
    {
      id: 2,
      question: '¿Cómo puedo solicitar una cotización?',
      answer: 'Puedes solicitar una cotización a través de nuestro formulario de contacto en la sección "Contacto" o llamando a nuestro número de teléfono.'
    },
    {
      id: 3,
      question: '¿Ofrecen servicios de instalación?',
      answer: 'Sí, ofrecemos servicios de instalación profesional para todos nuestros productos. Ponte en contacto con nosotros para más detalles.'
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
