import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../firebase/firebase.utils';
import { ReactComponent as Logo } from '../assets/resolute-apparel-logo.svg';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='header__logo-container' to='/'>
      <Logo className='header__logo-container-logo' />
    </Link>
    <div className='header__options'>
      <Link className='header__options-option' to='/shop'>
        SHOP
      </Link>
      <Link className='header__options-option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='header__options-option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='header__options-option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
