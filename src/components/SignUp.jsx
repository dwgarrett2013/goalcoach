import React, { Component } from 'react';
import { firebaseApp } from '../firebase';  //imports the firebase authentication thing

class SignUp extends Component {

  //Thgis is the constructor of the state field
  constructor(props) {
    super(props);
    //this is to create the state of the page
    //blank initial values
    this.state = {
      email: '',
      password: '',
      error: {
        message: '' //if there is an error this field will be set
      }
    }
  }

  //this function logs the state initially
  signUp() {
    console.log('this.state',this.state);
    //this uses the firebaseApp to create a user
    const { email, password} = this.state;  //ES6 syntax allows us to inherit these values from the state
    //perform the usercreation and provide a catch statement for error.  If an error occurs, the setState() method willset the error message accordingly
    //firebase catches errors with password length, invalid email, or if user already exists
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      });
  }

  //this class will render some jsx
  //form control is an example of a form field
  //password types replaces character keys with bullets
  //button field is a button type

  //after creating we set up a setate for the class
  //use on change on each button to update the state values be the values in the buttons
  //when onClick() is pressed we execute this.signup with an anonomous function
  //the closing div prints there error message if it is present
  //adding margins and px ensure appropriate resizing
  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>SignUp</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px'}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            style={{marginRight: '5px'}}
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signUp()}
          >
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
      </div>
    )
  }
}

export default SignUp;
