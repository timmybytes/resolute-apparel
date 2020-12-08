<h1 align="center">
  <img src="./src/assets/resolute-apparel-logo.svg" alt="Resolute Apparel logo" />
  <br />
Resolute Apparel
</h1>

<div align="center">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/timmybytes/resolute-apparel">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/timmybytes/resolute-apparel">
</div>

<div align="center">
  <strong>A mock e-commerce React site</strong>
</div>

<p align="center">
  <sub>Built with ❤︎ by
  <a href="https://timmybytes.com">Timothy Merritt</a>
</div>

Resolute Apparel is a React mock-eCommerce site. It's built with React, React-Router, Redux, SCSS, Firebase, and Stripe.

## Routing

React-Router handles the url routing with HashRouter (rather than the more typical BrowserRouter) to better integrate with GitHub Pages, though there might be some wonkiness in terms of url addresses because of the nature of how HashRouter works.

## Redux

Redux manages state for items added to the cart, rendered section previews, displaying the Shop, and handling user logged in state.

## Styling

The styling is handled with SCSS, using BEM conventions.

## Authentication

User authentication is handled through Firebase, with the option to sign-in with a preexisting Google account.

## Payments

Payment is handled through integrated Stripe functionality, which has a further layer of authentication where a user's account/billing information must be legitimate before checkout can finish. Test payments can be completed with the Stripe test credit card:

| CC Number | Expiration Date | CVV |
| --------------- | --------------- | --------------- |
| 4242 4242 4242 4242 | Any future date | Any future date |
