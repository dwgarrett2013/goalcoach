//this is a component used for presentation of goals
import React, { Component } from 'react';
import { connect } from 'react-redux';  //in order to find the current logged in user, we need access to the store
import { completeGoalRef, goalRef } from '../firebase';  //allows us to access database functionality to add to completegoals, need access to goalRef to delete goals

class GoalItem extends Component {

  //need a completeGoal helper method to complete the GoalList
  completeGoal() {
    //add to complete goals on database
    //in order to do this, we need a new database reference and we add that in import

    const { email } = this.props.user; //this allows us ot set the email we need based on the stored value
    const { title, serverKey } = this.props.goal;  //we receive this as a component from our GoalList component, we get the title and the serverkey
    //console.log('email', email,'title',title,'serverKey',serverKey);  //this shows us the credentials of the user that is logged in who clicked on the complete button

    //removes goal from datbase
    goalRef.child(serverKey).remove(); //makes reference to database item and then call delete on that reference
    //this pushes the updated goals to the database
    completeGoalRef.push({email, title});
  }

  render() {
    //log the console to see how to structure GoalItem and we find each Goal has an email and a title which we need to formatted
    const { email, title } = this.props.goal;  //sets the email and title fields
    console.log('this.props.goal', this.props.goal);
    //allows us to format the title andemail appropriately
    //we will also add a buton to complete a goal and will show the user who was signed in and how they completed it
    //when the button is clicked, an anonymous function call will be made to completeGoal
    return (
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    )
  }
}

//this allows us to sync the value of the user state to the store, meaning that if it is updated elsewhere we will get the value and vice versa
function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem); //this  allows us access to the store, we don't plan on creating actions at the moment, so all we need is to connect to user
