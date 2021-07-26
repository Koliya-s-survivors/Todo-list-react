import { Component } from 'react';
// components
import Parent from '../parent/';
import Child from '../child';

export default class App extends Component {
  render() {
    return (
      <>
        <Parent/>
        <Child />
      </>
    )
  }
}
