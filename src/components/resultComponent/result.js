import React from 'react';
import { useSelector } from 'react-redux';
import './result.scss';

const Result = ({ onClose }) => {
  const selectedNominees = useSelector(state => state.selectedNominees);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
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