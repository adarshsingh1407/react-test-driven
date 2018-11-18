import React, { Component, Fragment } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Adarsh',
      username: ''
    };
  }
  handleChange = (name) => {
    this.setState({
      name
    });
  }
  handleSubmit = () => {
    const {name} = this.state;
    this.setState({
      username: name
    });
  }
  render() {
    const {name, username} = this.state;
    return (
      <Fragment>
        <div id="username">{username}</div>
        <input id="username-input" type="text" name="" value={name} onChange={(e) => this.handleChange(e.target.value)} />
        <button id="signupform-submit" type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
      </Fragment>
    );
  }

}

export default SignupForm;
