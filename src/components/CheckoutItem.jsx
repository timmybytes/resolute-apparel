import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='checkout-item__image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='checkout-item__name'>{name}</span>
      <span className='checkout-item__quantity'>
        <div className='checkout-item__quantity-adjuster' onClick={() => removeItem(cartItem)}>
          {' '}
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='checkout-item__quantity-adjuster' onClick={() => addItem(cartItem)}>
          {' '}
          &#10095;
        </div>
      </span>
      <span className='checkout-item__price'>${price}</span>
      <button className='checkout-item__remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
