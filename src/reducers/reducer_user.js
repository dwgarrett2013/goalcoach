//this is the reducer file for returned user values.  It will handle actions that are created

import { SIGNED_IN } from '../constants';

//declaring a user variable for us to hold on to user information to display in the applciation
let user = {
  email: null
}

//we will export an anonymous function
//we could add a seperate case in the default for setGoals, but the problem is that we wouldnt nt' have a user returned, so better ot have a separate reducer
//the state of this is set to be the user paramter that is passed in
export default (state = user, action) => {
  //with reducers when it comes to actions, we switch on user.type.  A good way to think about this is like the MAPReduce reducer function
  switch(action.type) {
    case SIGNED_IN:
      const { email } = action;
      user = {
        email   //this is assigned to the email in user due to ES6 syntax
      }
      return user;
    //default case is to return state, which is initialized to the defined user
    default:
        return state;
  }
}
