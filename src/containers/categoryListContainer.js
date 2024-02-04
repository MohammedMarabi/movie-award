import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from '../components/categoriesComponent/categories';
import { selectNominee } from '../redux/nomineesAction';
import apiService from '../services/apiService';

const CategoryListContainer = () => {
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
    <CategoryList
      categories={categories}
      selectedNominees={selectedNominees}
      handleNomineeSelect={handleNomineeSelect}
    />
  );
};

export default CategoryListContainer;