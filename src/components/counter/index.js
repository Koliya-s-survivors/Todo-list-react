import {Component} from 'react';
//components
import CounterView from './counter-view';
import CounterModel from './counter-model';
import CounterRost from './counterRost';

class Counter extends Component {
  render() {
    return (
        <CounterModel>
          {/* {(propsObj) => <CounterView propsObj={propsObj}/>} */}
        {(propsRost) => { 
          console.log('propsRost: ', propsRost);
          return <CounterRost propsRost={propsRost} /> 
          }}
        </CounterModel>
    );
  }
}

export default Counter;