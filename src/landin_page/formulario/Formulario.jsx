import { useState } from 'react';
import './Formulario.css';
import contactImage from '../../assets/postal.webp';

function Formulario() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <section className="formulario-section" id="contacto">
      <div className="formulario-wrapper">
        <div className="formulario-left">
          <img
            src={contactImage}
            alt="Contáctanos"
            className="formulario-image"
            loading="lazy"
          />
        </div>

        <div className="formulario-right">
          <h2 className="formulario-title">Contáctanos</h2>
          <p className="formulario-subtitle">
            Déjanos tus datos y nos comunicaremos contigo a la brevedad.
          </p>

          <form
            className="formulario-form"
            method="POST"
            action="/formulario.php"
            acceptCharset="UTF-8"
          >
            <div className="form-field">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Tu número de contacto"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="correo">Correo Electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="tu@correo.com"
                required
              />
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="terminos"
                name="terminos"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terminos">Acepto los términos y condiciones</label>
            </div>

            <button type="submit" className="submit-button" disabled={!termsAccepted}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Formulario;


