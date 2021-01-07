import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXz1X4IkRGCnlXjWfZIe4PFl64Wc8yeEE",
  authDomain: "protfolio-form.firebaseapp.com",
  projectId: "protfolio-form",
  storageBucket: "protfolio-form.appspot.com",
  messagingSenderId: "200838940951",
  appId: "1:200838940951:web:691674be78193ea28b4f52",
  measurementId: "G-9PSL4Z25H9",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
