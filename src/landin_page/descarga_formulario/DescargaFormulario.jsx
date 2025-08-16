import React from 'react';
import styles from './DescargaFormulario.module.css';

const DescargaFormulario = () => {
  const downloadUrl = 'https://drive.google.com/drive/folders/1YxAt7GcgRUFtxScb'; // TODO: Replace with the actual download URL

  return (
    <a
      href={downloadUrl}
      className={styles.downloadButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Descargar nuestro portafolio"
    >
      <svg className={styles.pdfIcon} viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
      <span className={styles.buttonText}>Descarga nuestro portafolio</span>
    </a>
  );
};

export default DescargaFormulario;
