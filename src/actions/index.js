//This is the .js file for the actions folder

import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';  //imports a constant from the constants folder

export function logUser(email) {

  //this function creates an action which will be handled by redux
  const action = {
      type: SIGNED_IN,  //every action must have a type property
      email  //this is the value that is sent as part of the action that is sent (given via parametyer)
  }
  return action;
}

//function that set the Goals
//this creates an action argument that is sent to the reducer
export function setGoals(goals) {
  //this function creates an action which will be handled by the reducer
  const action = {
    type: SET_GOALS,
    goals  //this is the value of the goals that will be stored in the global store
  }

  return action;  //return the action which will be dispatched to the reducer
}

//function that gets complete goals
//this creates an action argument that is sent to the reducer
export function setCompleted(completeGoals) {
  //this function creates an action which will be handled by the reducer
  const action = {
    type: SET_COMPLETED,
    completeGoals  //this is the value of the completeGoals that will be stored in the global store
  }

  return action;  //return the action which will be dispatched to the reducer
}
