import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import NomineeCard from './nominees';
import { useDispatch, useSelector } from 'react-redux';
import { selectNominee } from '../redux/nomineesAction';

const CategoryList = () => {
  const dispatch = useDispatch();
  const selectedNominees = useSelector(state => state.selectedNominees);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/getBallotData')
      .then(response => setCategories(response.data.items))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleNomineeSelect = (categoryId, nomineeId) => {
    dispatch(selectNominee(categoryId, nomineeId));

  };

  return (
    <div style={{ border: '2px solid #3498db', borderRadius: '8px', }}>
      {categories.map(category => (
        <div key={category.id} style={{ padding: '1.5em'}}>
          <h2>{category.title}</h2>
          <Col key={category.id}>
          <div style={{ display: 'flex' , flexWrap: 'wrap'}}>
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