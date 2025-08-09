import React from 'react';
import './Respuesta.css'; // We will create this file next

const Respuesta = ({ answer, onClose }) => {
  return (
    <div className={`modal-overlay ${answer ? 'visible' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevents closing when clicking inside modal */}
        <p className="modal-answer">{answer}</p>
        <button className="modal-close-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Respuesta;
