import React, { Component, Fragment } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  handleChange = (name) => {
    this.setState({
      name
    });
  }
  handleSubmit = () => {
    const {name} = this.state;
    console.log('name', name);
  }
  render() {
    const {name} = this.state;
    return (
      <Fragment>
        <input type="text" name="" value={name} onChange={(e) => this.handleChange(e.target.value)} />
        <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
      </Fragment>
    );
  }

}

export default SignupForm;
