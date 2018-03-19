//this is the index.js file for the reducers files.  It will handle actions that are created

import { SIGNED_IN } from '../constants';

//declaring a user variable for us to hold on to user information to display in the applciation
let user = {
  email: null
}

//we will export an anonymous function
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
