// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

const config = {
  // apiKey: 'AIzaSyBgH9JgijTLP9DYPs9sCRvQ43PdYde9gxs',
  // authDomain: 'squib-beta.firebaseapp.com',
  // databaseURL: 'https://squib-beta.firebaseio.com',
  // projectId: 'squib-beta',
  // storageBucket: 'squib-beta.appspot.com',
  // messagingSenderId: '172995266624',
  // appId: '1:172995266624:web:9757beabee6126c672b7a5',
  // measurementId: 'G-FV721FPDQ2',
};

firebase.initializeApp(config);

export const analytics = firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
// export const appleProvider = new firebase.auth.OAuthProvider('apple.com');

// export const LOCAL = firebase.auth.Auth.Persistence.LOCAL;
