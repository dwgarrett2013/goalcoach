import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';  //import the firebase app for useage of firebase functions

class App extends Component {

  //logs the user out
  signOut(){
    firebaseApp.auth().signOut();
  }

  //this function will render some JSX
  //adding a red buttont to perform signout
  render() {
    return (
      <div>
      App
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
        Sign Out
        </button>
      </div>
    )
  }
}

//This maps the state the props values
function mapStateToProps(state) {
  console.log('state', state);
  return {};
}

export default connect(mapStateToProps, null)(App);
