import React from 'react';
import {  useSelector } from 'react-redux';

const Result = ({ onClose }) => {
  const selectedNominees = useSelector(state => state.selectedNominees);

  return (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        <h2>Selected Nominees</h2>
        {Object.entries(selectedNominees).map(([categoryId, nomineeId]) => (
          <p key={categoryId}>{`Category ${categoryId}: Nominee ${nomineeId}`}</p>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Result;