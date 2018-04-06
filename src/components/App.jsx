import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';  //import the firebase app for useage of firebase functions
import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends Component {

  //logs the user out
  signOut(){
    firebaseApp.auth().signOut();
  }

  //this function will render some JSX
  //adding a red buttont to perform signout
  //we can replace initial div argumeents with components (e.g. AddGoal and GoalList)
  render() {
    return (
      <div>
        <h3>Goals</h3>
        <AddGoal />
        <GoalList />
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

export default connect(mapStateToProps, null)(App); //the 2nd parameter should be any actionCreators that we want to map to props
