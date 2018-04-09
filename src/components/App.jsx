import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';  //import the firebase app for useage of firebase functions
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {

  //logs the user out
  signOut(){
    firebaseApp.auth().signOut();
  }

  //this function will render some JSX
  //adding a red buttont to perform signout
  //we can replace initial div argumeents with components (e.g. AddGoal and GoalList)
  //we can add style tags
  //hr tags can be used as dividers
  //adding completed goals list
  render() {
    return (
      <div style ={{margin: '5px'}}>
        <h3>GoalCoach</h3>
        <AddGoal />
        <hr />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <h4>Completed Goals</h4>
        <CompleteGoalList />
        <hr />
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
  //console.log('state', state);
  return {};
}

export default connect(mapStateToProps, null)(App); //the 2nd parameter should be any actionCreators that we want to map to props
