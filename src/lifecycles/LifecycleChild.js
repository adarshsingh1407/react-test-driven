import React, { Component } from 'react';

class LifecycleChild extends Component {
  componentWillMount() {
    console.log('Child | componentWillMount |', this.state);
  }
  componentDidMount() {
    console.log('Child | componentDidMount |', this.state);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Child | componentDidUpdate |', prevProps, prevState);
  }
  render() {
    console.log('Child | Render');
    const {id, name} = this.props;
    if (id && id > 0) {
      return (
        <div>
        <p>
          <span>ID: {id} | Name: {name}</span>
          <button onClick={() => this.props.selectChild(id)}>Select</button>
        </p>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default LifecycleChild;
