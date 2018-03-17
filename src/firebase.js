import * as firebase from 'firebase';  //import everything from firebase

//config for the firebase application
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

//initialize firebase application using constant
//we want to export since other files will be interested.  We want to make it accessible in the index.js file
export const firebaseApp=firebase.initializeApp(config);
