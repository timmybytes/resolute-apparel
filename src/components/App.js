import React from 'react';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import { Route, Switch } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import Header from './Header';
import SignInPage from '../pages/SignInPage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInPage} />
        </Switch>
      </>
    );
  }
}

export default App;
