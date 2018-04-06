//This component allows us to add a new goal view the menu.  It will replace the add goals <div> tags

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';  //we want to import goalRef to allow access to the database in firebase


//Create a rendering component to be used in JSX
//add a a form
//add a submit button
//still need to import in App.jsx for it to work
class AddGoal extends Component {

  //create some state for the component
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  //initially we are just going to log whatever the state of the title is
  addGoal() {
    console.log('this', this); //log everything
    const { title } = this.state;  //sets this.state.title using ES6 shorthand
    const { email } = this.props;  //set the email object value to the value of email in props

    //we want to push a sample value to the database.  This pushes values into the key that has been specified in goalref
    //we can pull each of these values using es6 shorthand
    goalRef.push({email, title});
  }

  //add a form input that as it changes updates the value of title in the state components
  //on click, we will call a helper function called addGoal which will add a goal to the state

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a Goal"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title: event.target.value})}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addGoal()}
          >
          Submit
          </button>
        </div>
      </div>
    )
  }
}

//this allows us to access the state as a props arguement.  So we can access email in this application as a props arguement (see the constructor)
function mapStateToProps(state) {
  const { email } = state;
  return {
    email
  }
}

//allows us to make the s
export default connect(mapStateToProps, null)(AddGoal);
