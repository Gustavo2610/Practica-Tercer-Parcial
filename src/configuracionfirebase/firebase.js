import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyDDNwdMdSspC-SB0_u3gk6n9LQjSWtyiL4",
  authDomain: "agenda-2b102.firebaseapp.com",
  projectId: "agenda-2b102",
  storageBucket: "agenda-2b102.appspot.com",
  messagingSenderId: "825384063385",
  appId: "1:825384063385:web:76f966b85a54ebc5e5c308"
};
 
firebase.initializeApp(firebaseConfig);
 
const db = firebase.firestore();
 
export { db };