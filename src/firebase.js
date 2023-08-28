// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBDkXNmAWodTxqeEMe2uvOPFAQcOAiED3E",
  authDomain: "pro-114c5.firebaseapp.com",
  projectId: "pro-114c5",
  storageBucket: "pro-114c5.appspot.com",
  messagingSenderId: "887999754638",
  appId: "1:887999754638:web:4a2b1ee6b9dd47685074df",
  measurementId: "G-29C4NC6V7M",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
