import React from 'react';
import './App.css';
import { Parent, Child } from './components/Props&State'

class App extends React.Component {
  render() {
    return (
      <>
      <Parent/>
      <Child/>
      </>
    )
  }
}

export { App };
// export default App;//
