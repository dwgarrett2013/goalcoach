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

//we want to work on setting up a database in firebase.  We set equal to database that we originally defined, use the database component, and pass the key that we want to use
//need to export so that other things can use it
export const goalRef=firebase.database().ref('goals');
