import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Provider } from 'react-redux';
import './App.scss';
import CategoryList from './components/categoriesComponent/categories';
import Result from './components/resultComponent/result';
import store from './redux/store';

function App() {
  const [showResults, setShowResults] = useState(false);
  const handleShowResults = () => {
    setShowResults(true);
  };
  
  const handleCloseResults = () => {
    setShowResults(false);
  };

  return (
    <Provider store={store}>
    <div className="main-container">
      <CategoryList />
      <Button className="submit-button" onClick={handleShowResults}>Submit</Button>
      {showResults && <Result onClose={handleCloseResults} />}
    </div>
    </Provider>
  );
}

export default App;