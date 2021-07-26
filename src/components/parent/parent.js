import React, {Component} from 'react';

class Parent extends Component {
  render() {
    return (
      <>
        <div>--Parent--</div>
        <div>{this.props.children(this.props.myProps)}</div>
      </>
    );
  }
}

export {Parent};