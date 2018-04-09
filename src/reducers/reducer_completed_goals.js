//this is the reducer file to handle completed goals

import { SET_COMPLETED } from '../constants';   //need to import setgoals

//the state value is an empty array that will hold the entire list of completed goals
export default (state = [], action) => {
  switch(action.type) {
    case SET_COMPLETED:
      const { completeGoals } = action;
      return completeGoals;
    default:
      return state;
  }
}
