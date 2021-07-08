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
    // const childrenWithExtraProp = React.Children.map(this.props.children, child => {
    //   return React.cloneElement(child, {
    //     counter: this.state.counter,
    //     increment: this.increment,
    //     decrement: this.decrement,
    //   });
    // });
    // console.log('childrenWithExtraProp', childrenWithExtraProp);

    return(

      {{
        counter: this.props.counter,
        increment: this.increment,
        decrement: this.decrement,
      }}
    )

  }
}

// const instance = new CounterModel();
// const dec = instance.decrement;
// dec();