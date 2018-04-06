import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  //imort the provider function
import { createStore } from 'redux';  //import the create store function
import { Router, Route, browserHistory } from 'react-router'; //imports tools to make a multipage app
import { firebaseApp } from './firebase'; //import firebase
import { logUser } from './actions'; //import logUser from actions to store information about the user
import reducer from './reducers';   //import the reducers component

//react router takes paths that we set as strings and makes them routes

//import your other component views
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

//rather than this.props, we can use store.dispatch(logUser) to send the action from the very bottom of applications
const store = createStore(reducer); //this is store value required for the provider component used in the render() function
//this creates the store for the values to mainstain across components

//adding authentication
//we then add listenr onAuthstate changed which returns a promise
firebaseApp.auth().onAuthStateChanged(user => {
  //if a user has signed in, we can direct to app.  We can do this according to how authenticated the user is
  if (user) {
    console.log('user has signed in or up', user);
    const {email } = user;
    store.dispatch(logUser(email)); //we use the dispatch function to send an action to log the user
    browserHistory.push('/app');  //the user remains signed in if they have not logged out using cookies that are stored on the browser because firebase remembers the user through the browser
  }
  //if no user is signed in, we need to direct them into the login page
  else {
    console.log('user has signed out or still needs to sign in');
    browserHistory.replace('/signin');  //If the user every gets logged out, we will need them to sign in again and therefore, we force a redirect to the signin page
  }
})


//The value just sits a the host and is the base
//history and browser history allows you to create history and handling redirects
//Route path hanldes routes within the Router path given specified strings
//We will wrap everything with a Provider component so that users can access the store
ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      </Router>
  </Provider>, document.getElementById('root')
)
