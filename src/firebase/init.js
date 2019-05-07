// https://github.com/firebase/firebase-js-sdk/issues/848
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/app';

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAqiGAtzkYd_wNTTwhXC0D8P-hn7whL1d0",
      authDomain: "smoothies-1969.firebaseapp.com",
      databaseURL: "https://smoothies-1969.firebaseio.com",
      projectId: "smoothies-1969",
      storageBucket: "smoothies-1969.appspot.com",
      messagingSenderId: "378199744569",
      appId: "1:378199744569:web:07c220a4b7ffb633"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// export firestore database
export default firebaseApp.firestore()
