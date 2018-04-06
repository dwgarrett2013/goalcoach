//This class will allow us to view/update the goallist in the UI.  This will replace the GoalList <div> tag

import React, { Component } from 'react';
import { goalRef } from '../firebase';  //importing goalref for  accessibility


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

        //this pushes just the email and title fields to the array
        goals.push({ email, title});
      })
      //let log all the array of goalObjects
      console.log('goals', goals);
    });
  }

  render() {
    return (
      <div>Goal List</div>
    )
  }
}


//as always we have to export this for it to be imported by App.jsx or another other .jsx file
export default GoalList;
