import React, {Component} from 'react';

class CounterControl extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>inc +</button>
        <button onClick={this.props.decrementCounter}>dec -</button>
      </div>
    );
  }
}

export default CounterControl;