import React from 'react';
import './App.css';
import {Parent, Child} from './components/props';

const myProps = [
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
]

class App extends React.Component {
  render() {
    return (
      <>
        <Parent myProps={myProps}>
          {(myProps) => {
            return myProps.map(({ name, lastName, age }) =>
              <Child name={name} lastName={lastName} age={age}/>)
          }}
        </Parent>
      </>
    )
  }
}

export {App};
