<h1 align="center">
  <img src="./src/assets/resolute-apparel-logo.svg" alt="Resolute Apparel logo" />
  <br />
Resolute Apparel
</h1>

<div align="center">
  <img alt="Scrutinizer code quality" src="https://scrutinizer-ci.com/g/timmybytes/resolute-apparel/badges/quality-score.png?b=dev">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/timmybytes/resolute-apparel">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/timmybytes/resolute-apparel">
  <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/timmybytes/resolute-apparel/github-pages">
</div>

<div align="center">
  <strong>A mock e-commerce React site</strong>
</div>

<p align="center">
  <sub>Built with ❤︎ by
  <a href="https://timmybytes.com">Timothy Merritt</a>
</p>

## About

Resolute Apparel is a React mock-eCommerce site built from React, React-Router, Redux, SCSS, Firebase, and Stripe. You can view the [demo site here](https://timmybytes.github.io/resolute-apparel). The goal of this project was to practice using a larger tech stack, and to employ

### React

Resolute Apparel is bootstrapped from `create-react-app`. It does not currently use Hooks, as state is managed by Redux.

#### Router

[React-Router](https://reactrouter.com/) handles the url routing with [HashRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/HashRouter.md) (rather than the more typical BrowserRouter) to better integrate with GitHub Pages, though there might be some wonkiness in terms of url addresses because of the nature of how HashRouter works.

### Styling

The styling is handled with [SCSS](https://sass-lang.com/), using [BEM](http://getbem.com/) naming conventions. Currently, the site uses Open Sans for font.

### Redux

[Redux](https://redux.js.org/) manages state for items added to the cart, rendered section previews, displaying the Shop, and handling user logged in state.

#### Persistence

[Redux Persist](https://github.com/rt2zz/redux-persist) creates persistent state with `localStorage`, saving added cart items and user credentials through refreshes and navigating away from the site.

### Firebase

User authentication and validation is handled through [Firebase](https://firebase.google.com/), with the option to sign-in with a pre-existing Google account or create a new account.

### Stripe

Payment processing functionality is handled through [Stripe](https://stripe.com) via [React Stripe Checkout](https://github.com/azmenak/react-stripe-checkout), which has a further layer of authentication where a user's account/billing information must be legitimate before checkout can finish.

#### Test Payments

Test payments can be completed with the Stripe test credit card:

| CC Number | Expiration Date | CVV |
| --------------- | --------------- | --------------- |
| 4242 4242 4242 4242 | Any future date | Any future date |

## Development

To use locally, clone the repo:

```sh
git clone https://github.com/timmybytes/resolute-apparel.git
```

Open directory and install dependencies:

```sh
cd resolute-apparel/
npm install
```

To start the development environment:

```sh
npm run start
```

To deploy to a domain:

Update `"homepage"` in `package.json` to the desired domain. Note that currently the project is set up to be deployed through GitHub Pages, which may cause errors elsewhere. Then run:

```sh
npm run deploy
```

## License

The Resolute Apparel site is offered under the MIT License.

## Contributing

Feel free to submit a PR, though since this is mostly a personal project, I may not merge your code. If you're looking to make extensive changes, you can fork and create your own version. Happy hacking.
