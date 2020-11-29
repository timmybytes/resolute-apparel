import React from 'react';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import SignInPage from '../pages/SignInPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </>
  );
}

export default App;
