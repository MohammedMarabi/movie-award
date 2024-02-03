import React from 'react';
import Card from 'react-bootstrap/Card';
import './nominees.scss';

const NomineeCard = ({ nominee, selected, onSelect }) => {
  const cardClassName = selected ? 'nominee-card selected' : 'nominee-card not-selected';

  return (
    <Card 
    key={nominee.id}
    className={cardClassName}
    onClick={onSelect}
  >
    <Card.Title>{nominee.title}</Card.Title>
    <Card.Img src={nominee.photoUrL} alt={nominee.title} className="card-image" />
  </Card>
  );
};

export default NomineeCard;