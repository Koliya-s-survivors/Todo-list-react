import React, {Component} from 'react';

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


export {Child};