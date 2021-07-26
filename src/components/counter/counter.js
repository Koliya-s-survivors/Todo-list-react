import React, {Component} from 'react';

import CounterView from '../counter-view';
import CounterControl from '../counter-control';

class Counter extends Component {
  state = {
    counter: 0,
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(` nextContext: `, nextContext);
    if ((nextState.counter %2) === 0) {
      return true;
    }
    return false;
  }

  incrementCounter = (data) => {
    const newCounter = this.state.counter + 1;
    // todo ...will be logic about positive
    this.setState({counter: newCounter})
    console.log(` data: `, data);
  }

  decrementCounter = () => {
    const newCounter = this.state.counter - 1;
    if (newCounter >= 0) {
      this.setState({counter: newCounter})
    }

  }

  render() {
    return (
      <div>
        <CounterView counter={this.state.counter}/>
        <CounterControl incrementCounter={this.incrementCounter}
                        decrementCounter={this.decrementCounter}/>
      </div>
    );
  }
}

export default Counter;