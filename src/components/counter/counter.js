import React, {Component} from 'react';

import CounterView from '../counter-view';
import CounterControl from '../counter-control';

class Counter extends Component {
  state = {
    counter: 0,
  }

  incrementCounter = () => {
    const newCounter = this.state.counter + 1;
    this.setState({counter: newCounter})
  }

  decrementCounter = () => {
    const newCounter = this.state.counter - 1;
    this.setState({counter: newCounter})
  }

  render() {
    return (
      <div>
        <CounterView counter={this.state.counter}/>
        <CounterControl incrementCounter={this.incrementCounter} decrementCounter={this.decrementCounter}/>
      </div>
    );
  }
}

export default Counter;