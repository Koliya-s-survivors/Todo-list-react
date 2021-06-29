import {Component} from 'react';

class Parent extends Component {
  render() {
    return (
      <>
        <p>Parent</p>
        <p>{this.props.children}</p>
      </>
    );
  }

}

export default Parent;
