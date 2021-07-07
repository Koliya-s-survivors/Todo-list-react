import React from 'react';
import './App.css';
// components
import {
  Child,
  Parent
} from '../src/components/lifeTimeHooks';
// const Obj = module.require('../src/components/lifeTimeHooks');
// const Parent = Obj.Parent;
// const Child = Obj.Child;
// array data
const data = [
  {
    firstName: 'Aleksey',
    lastName: 'Salkov',
    age: 38,
    nationality: 'Ukrainian'
  },
  {
    firstName: 'Sergey',
    lastName: 'Krasnitskiy',
    age: 36,
    nationality: 'Ukrainian'
  },
  {
    firstName: 'Hamed',
    lastName: 'Fouladi',
    age: 35,
    nationality: 'Ukrainian'
  }
];

class App extends React.Component {
  render() {
    return (
      // Transmitting data array over props of the parent element
      <Parent data={data}>
        <Child/>
        <div>Good</div>
      </Parent>
    )
  }
}

export {App};
// export default App;//
