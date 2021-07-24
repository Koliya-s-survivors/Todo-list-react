import React from 'react';
import './App.css';
import { Parent, Child } from './components/Props&State'

class App extends React.Component {
  render() {
    return (
      <Parent name="Kolyan">
        <Child name="Rost"/> 
        <Child name="Hamed" />
      </Parent>
    )
  }
}

export { App };
// export default App;//
