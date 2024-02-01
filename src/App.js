import React, { useState } from 'react';
import CategoryList from './components/categories';
import Result from './components/result';
import { Button } from 'react-bootstrap';
import { Provider } from 'react-redux';
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
    <div style={{padding: '25px'}}>
      <CategoryList />
      <Button style={{float:'right', margin: '1em', fontSize: 'large'}} onClick={handleShowResults}>Submit</Button>
      {showResults && <Result onClose={handleCloseResults} />}
    </div>
    </Provider>
  );
}

export default App;