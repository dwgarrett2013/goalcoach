//this is the reducer file to handle goals

import { SET_GOALS } from '../constants';   //need to import setgoals

//the state value is an empty array that will hold the entire list of goals
export default (state = [], action) => {
  switch(action.type) {
    case SET_GOALS:
      const { goals } = action;
      return goals;
    default:
      return state;
  }
}
