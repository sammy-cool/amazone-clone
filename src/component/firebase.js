import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDCSPe0gQpzeDTjsOpJcDeCNVjnjzYwlBs",
  authDomain: "clone-c8d57.firebaseapp.com",
  databaseURL: "https://clone-c8d57.firebaseio.com",
  projectId: "clone-c8d57",
  storageBucket: "clone-c8d57.appspot.com",
  messagingSenderId: "288579912902",
  appId: "1:288579912902:web:f57698f0d5bc920a6503c7",
  measurementId: "G-EYHETKCPLN",
});

const auth = firebase.auth();

export { auth };
