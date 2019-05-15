import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/app';

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCxIsCL1Lqq9eDmA8yQ13BYb74TuAAIf_k",
      authDomain: "geo-1969.firebaseapp.com",
      databaseURL: "https://geo-1969.firebaseio.com",
      projectId: "geo-1969",
      storageBucket: "geo-1969.appspot.com",
      messagingSenderId: "977470978637",
      appId: "1:977470978637:web:e9a7eb1e2ec4f959"
};

    // Initialize Firebase
    const firebaseApp = firebase.initializeApp(firebaseConfig);

     // export firebase database
    export default firebaseApp.firestore()