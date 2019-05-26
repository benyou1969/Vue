import firebase from 'firebase/App'
import 'firebase/firestore'
import 'firebase/app'
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAy3P5Y9WT3zPGlFccOqCMUcxGHDXn4XkI",
    authDomain: "hola-you.firebaseapp.com",
    databaseURL: "https://hola-you.firebaseio.com",
    projectId: "hola-you",
    storageBucket: "hola-you.appspot.com",
    messagingSenderId: "1049280959693",
    appId: "1:1049280959693:web:00b278c259f4e3de"
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);

  // export firebase database
  export default firebaseApp.firestore()