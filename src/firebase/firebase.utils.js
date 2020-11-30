import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCcDfoGhoIikkZvioqZQxhEj71PxLccJ3c',
  authDomain: 'resolute-apparel.firebaseapp.com',
  databaseURL: 'https://resolute-apparel.firebaseio.com',
  projectId: 'resolute-apparel',
  storageBucket: 'resolute-apparel.appspot.com',
  messagingSenderId: '407361526842',
  appId: '1:407361526842:web:83ffcc2da0ae4e1426a903',
  measurementId: 'G-M7THLFCPSM',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
