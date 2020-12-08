import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey =
    'pk_test_51Hw6hCFiIW9yLxn1C22p6Dyvuj9si9MI7yq2VC18JzRf4EicL2QjmpQmcIItXlVBfa9Dxp6AaGPYx8kVdhqzl4NV00N93SJXGl';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Resolute Apparel'
      billingAddress
      shippingAddress
      image='https://raw.githubusercontent.com/timmybytes/resolute-apparel/e80682a2f2bb48dba1741668755b373959c9336a/src/assets/resolute-apparel-logo.svg'
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
