import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButton from './CustomButton';
import CartItem from './CartItem';
import { toggleCartHidden } from '../redux/cart/cart.actions';
import { selectCartItems } from '../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-dropdown__cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className='cart-dropdown__empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      className='cart-dropdown__button'
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
