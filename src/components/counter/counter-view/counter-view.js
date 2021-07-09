import {Component} from 'react';


class CounterView extends Component {
  render() {
    const { counter, increment, decrement } = this.props.propsObj;
    console.log('this.props', this.props);
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