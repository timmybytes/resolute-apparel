import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore;

firestore
  .collection('users')
  .doc('RBWmygr6LcgoyWCU3yBT')
  .collection('cartItems')
  .doc('9B2RkQFlkxMKJB2filAr');
firestore.doc('/users/RBWmygr6LcgoyWCU3yBT/cartItems/9B2RkQFlkxMKJB2filAr');
firestore.collection('/users/RBWmygr6LcgoyWCU3yBT/cartItems');
