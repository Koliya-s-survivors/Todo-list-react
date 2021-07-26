import React from 'react';

import {Parent} from '../parent';
import {Child} from '../child';


class App extends React.Component {
  state = {
    myProps: [
      {
        name: 'Hamed',
        lastName: 'Fouladi',
        age: 17
      },
      {
        name: 'Hamed1',
        lastName: 'Fouladi1',
        age: 18
      },
      {
        name: 'Hamed2',
        lastName: 'Fouladi2',
        age: 19
      },
      {
        name: 'Hamed3',
        lastName: 'Fouladi3',
        age: 20
      },
    ],
  }

  render() {
    return (
      <>
        <Parent myProps={this.state.myProps}>
          {(arr) => arr.map(({name, lastName, age}) =>
            <Child name={name} lastName={lastName} age={age}/>)}
        </Parent>
      </>
    )
  }
}

export {App};