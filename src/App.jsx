import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchPage from './page/SearchPage';

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
