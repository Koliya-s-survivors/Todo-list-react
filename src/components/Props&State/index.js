import React, { Component } from 'react';

class Parent extends Component {
  render() {
    return (
      <>
      <div>Parent</div>
      <div>{this.props.children}</div>
      </>   
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div>Child</div>
    )
  }
}


export { Parent, Child };

