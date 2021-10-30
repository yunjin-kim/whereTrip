import React from 'react';
import SearchPage from './Search/SearchPage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  

  return (
    <> 
      <BrowserRouter>
        <Route path="/" component={SearchPage} exact={true} />
      </BrowserRouter>
    </>
  );
}

export default App;
