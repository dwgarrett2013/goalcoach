//This is the .js file for the actions folder

import { SIGNED_IN } from '../constants';  //imports a constant from the constants folder

export function logUser(email) {

  //this function creates an action which will be handled by redux
  const action = {
      type: SIGNED_IN,  //every action must have a type property
      email
  }
  return action;
}
