import * as firebase from 'firebase';  //import everything from firebase

//config for the firebase application
const config = {
  apiKey: "AIzaSyBahmT36v5o57-qEZyVkj94u3QXV9s3tH0",
  authDomain: "goalcoach-44feb.firebaseapp.com",
  databaseURL: "https://goalcoach-44feb.firebaseio.com",
  projectId: "goalcoach-44feb",
  storageBucket: "goalcoach-44feb.appspot.com",
  messagingSenderId: "475018130150"
};

//initialize firebase application using constant
//we want to export since other files will be interested.  We want to make it accessible in the index.js file
export const firebaseApp=firebase.initializeApp(config);
