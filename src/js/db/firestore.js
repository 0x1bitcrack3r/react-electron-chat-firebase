import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

export const { Timestamp } = firebase.firestore;

// Initialize Firebase
const db = firebase.initializeApp(config).firestore();

export default db;
