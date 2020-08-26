// Your web app's Firebase configuration

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyABJw_MgA4WUPdCoeUQ1VE0sCHz4aExlI8",
  authDomain: "trackit-5eda8.firebaseapp.com",
  databaseURL: "https://trackit-5eda8.firebaseio.com",
  projectId: "trackit-5eda8",
  storageBucket: "trackit-5eda8.appspot.com",
  messagingSenderId: "817610762654",
  appId: "1:817610762654:web:97907688e441faee57ce8f",
  measurementId: "G-RCFYZXH4K7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
