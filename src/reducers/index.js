//this reducer file combines the  reducer_goals and reducer_user reducer filesystem

import { combineReducers } from 'redux';  //imports ability to combine reducers from redux
import user from './reducer_user';
import goals from './reducer_goals';  //imports goals from
import completeGoals from './reducer_completed_goals';  //imports completeGoals

//quite literally define a function called combineReducers that takes the 2 arguements listed
export default combineReducers({
  user,
  goals,
  completeGoals
})
