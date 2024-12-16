import React from 'react';
import '../Styles/Styles.css';

const CardStacked = ({ image, title, text, link, offset }) => {
  return (
    <div className="card-stacked">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-text" style={{ bottom: offset }}>
        <h5>{title}</h5>
        <p>{text}</p>
        <a href={link} target="_blank" className="link-arrow">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/009/351/321/non_2x/arrow-icon-arrows-sign-black-arrows-free-png.png" 
            alt="link" 
            style={{ width: '25px', height: '25px' }}
          />
        </a>
      </div>
    </div>
  );
};

CardStacked.defaultProps = {
  offset: '-20px',
};

export default CardStacked;