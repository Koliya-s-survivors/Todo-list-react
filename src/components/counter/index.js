import {Component} from 'react';
//components
import CounterView from './counter-view';
import CounterModel from './counter-model';

class Counter extends Component {
  render() {
    return (
        <CounterModel>
          <CounterView/>
        </CounterModel>
    );
  }
}

export default Counter;