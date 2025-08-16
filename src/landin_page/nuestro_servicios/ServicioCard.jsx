import React from 'react';
import './ServicioCard.css';

const ServicioCard = ({
  image,
  title,
  description,
  isVisible,
  isMobile,
  titleColor = 'var(--color-white)',
  descriptionColor = 'var(--color-white)',
  gradientFrom = 'rgba(0, 0, 0, 0.603)',
  gradientTo = 'rgba(0, 0, 0, 0)',
  gradientHeight = '40%'
}) => {
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
      className={`servicio-card ${isMobile ? 'is-mobile' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card-content"
        style={{
          '--gradient-from': gradientFrom,
          '--gradient-to': gradientTo,
          '--gradient-height': gradientHeight,
        }}
      >
        <h3 className="card-title" style={{ color: titleColor }}>{title}</h3>
        <p className={`card-description ${isMobile ? (isVisible ? 'visible' : '') : (isHovered ? 'visible' : '')}`} style={{ color: descriptionColor }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicioCard;