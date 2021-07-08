import {Component} from 'react';

class Counter extends Component {
  state = {
    counter: 0,
  }
  increment ()  {
    let count = this.state.counter;
    count++;
    this.setState({counter: count});
  }
  decrement()  {
    let count = this.state.counter;
    count--;
    this.setState({counter: count});
  }
  render() {
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
      </>
    )
  }
}

export default Counter;