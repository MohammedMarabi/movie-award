import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { selectNominee } from '../../redux/nomineesAction';
import apiService from '../../services/apiService';
import NomineeCard from '../nomineesComponent/nominees';
import './categories.scss';

const CategoryList = () => {
  const dispatch = useDispatch();
  const selectedNominees = useSelector(state => state.selectedNominees);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiService.get('/getBallotData')
      .then(response => setCategories(response.data.items))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleNomineeSelect = (categoryId, nomineeId) => {
    dispatch(selectNominee(categoryId, nomineeId));

  };

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