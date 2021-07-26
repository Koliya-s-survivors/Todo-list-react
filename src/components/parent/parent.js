import { Component } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <>
        {this.props.children(this.props.cars)}
      </>
    )
  }
}
