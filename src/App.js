import React from 'react';
import SearchPage from './Search/SearchPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    </>
  );
}

export default App;
