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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // for CRUD methods, must use documentRef objects
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // If snapShot doesn't exist, create data in its place
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
