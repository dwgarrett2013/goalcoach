import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'; //imports tools to make a multipage app
import { firebaseApp } from './firebase'; //import firebase


//react router takes paths that we set as strings and makes them routes

//import your other component views
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

//adding authentication
//we then add listenr onAuthstate changed which returns a promise
firebaseApp.auth().onAuthStateChanged(user => {
  //if a user has signed in, we can direct to app
  if (user) {
    console.log('user has signed in or up', user);
  }
  //if no user is signed in, we need to direct them into the login page
  else {
    console.log('user has signed out or still needs to sign in');
  }
})


//The value just sits a the host and is the base
//history and browser history allows you to create history and handling redirects
//Route path hanldes routes within the Router path given specified strings
ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Route path="/app" component={App} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Router>, document.getElementById('root')
)
