import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-page__header'>
      <div className='checkout-page__header-block'>
        <span>Product</span>
      </div>
      <div className='checkout-page__header-block'>
        <span>Description</span>
      </div>
      <div className='checkout-page__header-block'>
        <span>Quantity</span>
      </div>
      <div className='checkout-page__header-block'>
        <span>Price</span>
      </div>
      <div className='checkout-page__header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => cartItem.name)}
    <div className='checkout-page__total'>
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
