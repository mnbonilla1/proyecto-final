import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import '../Styles/Styles.css';
const CardsBio = ({ image, title, text, text1, offset }) => {
  return (
    <div className="biocard-stacked">
      <div className="biocard-image">
        <img src={image} alt={title} />
      </div>
      <div className="biocard-text" style={{ bottom: offset }}>
  <h5>{title}</h5>
  <p>{text}</p>
  <h8 className="biocard-text-muted-white">{text1}</h8>
</div>
    </div>
  );
};

CardsBio.defaultProps = {
  offset: '-20px',
};


export default CardsBio;
