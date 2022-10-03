import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH4tqlzGfp0ugIoJoZ7fCDHS-aI-GBMPY",
  authDomain: "clone-c1b25.firebaseapp.com",
  projectId: "clone-c1b25",
  storageBucket: "clone-c1b25.appspot.com",
  messagingSenderId: "60872158096",
  appId: "1:60872158096:web:2673311ff3d0fe54aaa115",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
