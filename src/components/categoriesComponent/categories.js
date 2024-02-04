import React from 'react';
import Col from 'react-bootstrap/Col';
import NomineeCard from '../nomineesComponent/nominees';
import './categories.scss';

const CategoryList = ({ categories, selectedNominees, handleNomineeSelect }) => {

  return (
    <div className='category-list'>
      {categories.map(category => (
        <div key={category.id} className="category-item">
          <h2>{category.title}</h2>
          <Col key={category.id}>
          <div className="nominee-container">
            {category.items.map(nominee => (
               <NomineeCard
               key={nominee.id}
               nominee={nominee}
               selected={selectedNominees[category.id] === nominee.id}
               onSelect={() => handleNomineeSelect(category.id, nominee.id)}
             />
            ))}
        </div>
         </Col>
        </div>
      ))}
      </div>
  );
};

export default CategoryList;