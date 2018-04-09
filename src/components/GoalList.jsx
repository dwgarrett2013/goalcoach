//This class will allow us to view/update the goallist in the UI.  This will replace the GoalList <div> tag

import React, { Component } from 'react';
import { connect } from 'react-redux';  //we want the ability to access the stoer
import { goalRef } from '../firebase';  //importing goalref for  accessibility
import { setGoals } from '../actions';  //importing allows us to spawn actions that create goals
import GoalItem from './GoalItem';  //import allows us to format GoalItems as part of a goal list


//create a Component for import that has props.  Remembmer that the render is part of the default of this
//as always, we have to import this in App.jsx for later
class GoalList extends Component {

  //adding a lifecycle hook after the component mounts.  We will want to add this information after the component is loaded
  //this will also get added in realtime if another goal is added because of the componentDidMoutn
  componentDidMount() {
    //we want this promise to be created everytime something occurs within the firebase database (any event)
    //we define an anonymous function loop over everything provided by the event
    //if we were to console.log each object, we would get a list of each object once the component is loaded
    //this will also get added in realtime if another goal is added because of the componentDidMoutn
    goalRef.on('value', snap => {
      //prepare an array of goals to push all the goalobjects
      let goals= [];
      snap.forEach(goal => {
        //this would give us the full object, but we only need specific fields
        //let goalObject = goal.val();  //for each goal, we want to get the value and set to Global_Objects

        //to get the specific fields of the goal object instead of the full Object
        const { email, title } = goal.val(); //using es6, this allows us to push just the goal and the title
        //console.log('goalObject', goalObject);

        //this would push the whole dbobject to the array
        //goals.push(goalObject);

        //gets the key of the goal that will be pushed
        const serverKey = goal.key;

        //this pushes just the email, title, and serverKey fields to the array
        goals.push({ email, title, serverKey});
        //shows us the goal that was pushed
        console.log('goal',goal);
      })
      //let log all the array of goalObjects
      console.log('goals', goals);

      //we can create an action since we imported it from another actions
      //this action adds all the goals to the props value of goals (see action) and since setGoals is mapped to the map state to props, then it is available to the store
      this.props.setGoals(goals);
    });
  }

  //if we want to render the goals well, we need to call a map function over top of it within a div function
  //map allows us to show all values
  //need to have unique id for each element.  THIS CAN BE SOLVED BY ADDING A 2ND PARAMTER TO MAP, CALLED INDEX WHICH MAKES AN INDEX AVAILABLE
  //to make things look really nice, let's jsut create a new goal div component called GoalItem

  render() {
    console.log('this.props.goals', this.props.goals);
    return (
      <div>
        {
            this.props.goals.map((goal, index) => {
                return (
                  <GoalItem key={index} goal={goal} />
                )
            })
        }
      </div>
    )
  }
}

//this maps the goals in the state function to the props function
//works in conjunction with set goals (see the connect function)
function mapStateToProps(state) {
  //returns an object containing goals from the state object
  const { goals } = state;
  return {
    goals
  }
}


//as always we have to export this for it to be imported by App.jsx or another other .jsx file
//connect links the mapstate to props and set goals functions.  when set togals is called, it maps the state to props
export default connect(mapStateToProps, { setGoals })(GoalList);  //the 2nd parameter should be any actionCreators that we want to map to props, in this case setGoals in the only thing
