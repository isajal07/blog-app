import firebase from 'firebase/app';
import 'firebase/firestore';
require('firebase/auth')


var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcqCLrFjPivwhFB7GkBV1inJCw27EXIRY",
  authDomain: "react-firebase-blog-830e2.firebaseapp.com",
  databaseURL: "https://react-firebase-blog-830e2.firebaseio.com",
  projectId: "react-firebase-blog-830e2",
  storageBucket: "react-firebase-blog-830e2.appspot.com",
  messagingSenderId: "894809644613",
  appId: "1:894809644613:web:e2e23b2af67642dd140d2c"
});
// Initialize Firebase

let db = firebaseApp.firestore();

export const auth = firebaseApp.auth()
export const firestore = firebaseApp.firestore;
export default db;