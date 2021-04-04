import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDe_gk3OK3eGLIHuDtfI9fCmjRRNeeWxg8",
    authDomain: "evernote-11311.firebaseapp.com",
    databaseURL: "https://evernote-11311-default-rtdb.firebaseio.com",
    projectId: "evernote-11311",
    storageBucket: "evernote-11311.appspot.com",
    messagingSenderId: "53396899609",
    appId: "1:53396899609:web:858af4b9ec5d70c9bd6788",
    measurementId: "G-6NGS313CZL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebaseConfig