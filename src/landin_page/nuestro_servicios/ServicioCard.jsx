import React from 'react';
import './ServicioCard.css';

const ServicioCard = ({ image, title, description, isVisible, isMobile }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className="servicio-card"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className={`card-description ${isMobile ? (isVisible ? 'visible' : '') : (isHovered ? 'visible' : '')}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicioCard;