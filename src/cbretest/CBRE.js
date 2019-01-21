import React, { Component } from 'react';

class CBRE extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myFn();
  }
  myFn = () => {
    console.log('CBRE: START');
    var foo = {
      bar: function() {
        return this.baz;
      },
      baz: 1
    };
  (
    function() {
      return typeof arguments[0]();
    }
  )
  foo.bar();
    console.log('CBRE: END');
  }
  render() {
    return (
      <div>CBRE</div>
    );
  }

}

export default CBRE;
