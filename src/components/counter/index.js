import {Component} from 'react';
//components
import CounterView from './counter-view';
import CounterModel from './counter-model';

class Counter extends Component {
  render() {
    return (
        <CounterModel>
          {(propsObj) => <CounterView propsObj={propsObj}/>}
        </CounterModel>
    );
  }
}

export default Counter;