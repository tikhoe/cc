import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDvjMgEcuaDVJ5eqobbM6E0O6x_-4kEkdU",
  authDomain: "wonda-f1f7e.firebaseapp.com",
  databaseURL: "https://wonda-f1f7e.firebaseio.com",
  projectId: "wonda-f1f7e",
  storageBucket: "wonda-f1f7e.appspot.com",
  messagingSenderId: "814253955991",
  appId: "1:814253955991:web:52b9abe68e690cf2",
});

const fireStore = app.firestore();

export { app, fireStore };
