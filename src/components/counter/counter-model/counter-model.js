import React, {Component} from 'react';

export default class CounterModel extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    const count = this.state.counter + 1;
    this.setState({ counter: count });
  };

  decrement = () => {
    const count = this.state.counter - 1;
    this.setState({ counter: count });
  };

  render() {
    return(
      <>
        {this.props.children({
          counter: this.state.counter,
          increment: this.increment,
          decrement: this.decrement,
        }
        )}
      </>
    )
  }
}

// const instance = new CounterModel();
// const dec = instance.decrement;
// dec();
