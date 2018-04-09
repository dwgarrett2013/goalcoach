//this component lists the complete Goals
// to create an action to update the store need to follow the 3 stesps
//1.  create constants
//2.  create action
//3.  register reducer (need separate reducer for completed goals)
//4.  import completeGoals into reducers.js
//5.  add connect function to create actions from CompleteGoalList.jsx
import React, { Component } from 'react'; //imports component
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase'; //this will allow us ot access the lsit of completed goals

class CompleteGoalList extends Component {

  //we are going to mirror GoalList to present the list of Goals
  componentDidMount() {
      completeGoalRef.on('value', snap => {
        let completeGoals = []; //we create an array to hold each of the values in the array
        snap.forEach(completeGoal => {
          const { email, title } = completeGoal.val();  //extracts these values from the completeGoal object
          //push each goal onto the array
          completeGoals.push({ email, title});
        })
        console.log('completeGoals', completeGoals);
        this.props.setCompleted(completeGoals); //invoke actioncreator
      })
  }

  //very easy task to perform, we just set the array to be empty
  clearCompleted() {
    completeGoalRef.set([]);
  }

  //unlike in goal list, we are just listing the object and do not need a bunch of sublogic
  //we add functionality to clearAll completed tasks
  render() {
    return (
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            const {title, email } = completeGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    )
  }
}

//mapStateToProps function, allows us to complete MapState to props
function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList); //the second arguement is the actions that we want to invoke from this component
