import React, {Component} from 'react';

import CounterView from '../counter-view';
import CounterControl from '../counter-control';

class Counter extends Component {

  state = {
    transferCounter: null
  }

  rewriteCounter = (counter) => {
    this.setState({ transferCounter: counter });
  }

  render() {
    return (
      <div>
        <CounterView counter={this.state.transferCounter}/>
        <CounterControl rewriteCounter={this.rewriteCounter}/>
      </div>
    );
  }
}

export default Counter;