import React from 'react';
import Card from 'react-bootstrap/Card';

const NomineeCard = ({ nominee, selected, onSelect }) => {
  return (
    <Card 
    key={nominee.id}
    style={{
      border: selected ? '5px solid #3498db' : '5px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px',
      cursor: 'pointer',
      width: '15%'
    }}
    onClick={onSelect}
  >
    <Card.Title>{nominee.title}</Card.Title>
    <Card.Img src={nominee.photoUrL} alt={nominee.title} style={{ width: '100%' }} />
  </Card>
  );
};

export default NomineeCard;