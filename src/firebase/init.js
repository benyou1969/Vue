import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/app';

// Your web app's Firebase configuration
      var firebaseConfig = {
            apiKey: "AIzaSyDNfzV0eKlKAHAWkJPKofY_LVDg7ygKg9E",
      authDomain: "chat-1969.firebaseapp.com",
      databaseURL: "https://chat-1969.firebaseio.com",
      projectId: "chat-1969",
      storageBucket: "chat-1969.appspot.com",
      messagingSenderId: "455217782768",
      appId: "1:455217782768:web:e26dd83169be75b3"
    };
    // Initialize Firebase
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    // export firebase database
    export default firebaseApp.firestore()