import React, { Component } from 'react';

class Parent extends Component {
  render() {
    const { name, children } = this.props;
    return (
      <>
        <div>Parent</div>
        <div>{ name }</div>
        <div>{ children }</div>
      </>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <>
        <div>Child</div>
        <div>{ this.props.name }</div>
      </>
    )
  }
}



export { Parent, Child };

