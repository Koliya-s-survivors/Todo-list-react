import React, {Component} from 'react';

class Parent extends Component {
  render() {
    return (
      <>
        <div>Parent</div>
        <div>{this.props.children(this.props.myProps)}</div>
      </>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <>
        <div>Child</div>
        <div>{this.props.name}</div>
        <div>{this.props.lastName}</div>
        <div>{this.props.age}</div>
      </>
    );
  }
}


export {Parent, Child};