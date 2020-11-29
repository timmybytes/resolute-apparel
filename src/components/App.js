import React from 'react';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
