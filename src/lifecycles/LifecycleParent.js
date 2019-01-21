import React, { Component } from 'react';
import LifecycleChild from './LifecycleChild';

const idNameMap = {
  1: 'Adarsh',
  2: 'Shashank',
  3: 'Kanika'
}

const getNameFromId = (id) => {
  return idNameMap[id] || '';
}

class LifecycleParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChildId: undefined,
      selectedChildName: undefined
    };
    console.log('Parent | constructor |', this.state);
  }
  componentWillMount() {
    console.log('Parent | componentWillMount |', this.state);
  }
  componentDidMount() {
    console.log('Parent | componentDidMount |', this.state);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Parent | componentDidUpdate |', prevProps, prevState);
  }
  static getDerivedStateFromProps = (props, state) => {
    console.log('getDerivedStateFromProps', props, state);
  }
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('getSnapshotBeforeUpdate', prevProps, this.props, prevState, this.state);
  }
  selectChild = (id) => {
    this.setState({
      selectedChildId: id,
      selectedChildName: idNameMap[id]
    });
  }
  render() {
    console.log('Parent | Render');
    const {ids} = this.props;
    const {selectedChildId, selectedChildName} = this.state;
    return (
      <div>
        {ids && ids.map(id => {
          return (<LifecycleChild key={id} selectChild={this.selectChild} id={id} name={getNameFromId(id)} />);
        })}
        <div>
          Selected Child: <LifecycleChild selectChild={this.selectChild} id={selectedChildId} name={selectedChildName} />
        </div>
      </div>
    );
  }

}

export default LifecycleParent;
