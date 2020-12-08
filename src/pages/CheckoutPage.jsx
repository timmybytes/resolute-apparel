import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';
import CheckoutItem from '../components/CheckoutItem';
import StripeCheckoutButton from '../components/StripeCheckoutButton';

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
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='checkout-page__total'>
      <span>TOTAL: ${total}</span>
    </div>
    <div className='checkout-page__test-warning'>
      Please use the following test credit card for payments: <br />
      CC: 4242 4242 4242 4242 - Exp: Any future date - CVV: Any three digits
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
