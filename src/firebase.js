import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1pn0EpvMy9nu6jgrMWZnwSf2UGUiQi7g",
  authDomain: "pf-socialql-react-firebase.firebaseapp.com",
  projectId: "pf-socialql-react-firebase",
  storageBucket: "pf-socialql-react-firebase.appspot.com",
  messagingSenderId: "548240259884",
  appId: "1:548240259884:web:94bc7ddd26f8d3a4480a89",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
