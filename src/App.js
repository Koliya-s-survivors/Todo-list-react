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

class App extends React.Component {
  render() {
    return (
      <Parent>
        <Child/>
        <div>Good</div>
      </Parent>
    )
  }
}

export {App};
// export default App;//
