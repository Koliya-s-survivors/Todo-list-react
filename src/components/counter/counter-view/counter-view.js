import {Component} from 'react';


class CounterView extends Component {
  render() {
    const { counter, increment, decrement } = this.props.children;
    console.log('this.props.children', this.props.children);
    return (
      <>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </>
    );
  }
}

export default CounterView;