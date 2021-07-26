import { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <>
        <div>Child</div>
        <div>{this.props.model}</div>
        <div>{this.props.body}</div>
        <div>{this.props.year}</div>
        <div>{this.props.color}</div>
      </>
    )
  }
}
