import React, {Component} from 'react';

class CounterView extends Component {
  render() {
    return (
      <div>
        {this.props.counter}
      </div>
    );
  }
}

export default CounterView;