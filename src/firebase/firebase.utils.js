import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBgdbqNzC8bSRznIsFZsCdv7H3WlHwsaGg",
  authDomain: "react-e-commerce-db-4fc74.firebaseapp.com",
  databaseURL: "https://react-e-commerce-db-4fc74.firebaseio.com",
  projectId: "react-e-commerce-db-4fc74",
  storageBucket: "",
  messagingSenderId: "775396144996",
  appId: "1:775396144996:web:ba4757bfa93ce6256d6c71"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;