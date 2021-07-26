import { Component } from 'react';
// components
import Parent from '../parent';
import Child from '../child';

export default class App extends Component {
  state = {
    cars: [
      {
        model: 'LandRover',
        body: 'Crossover',
        year: 2018,
        color: 'Red',
      },
      {
        model: 'Ford-150',
        body: 'SUV',
        year: 2017,
        color: 'Black',
      },
      {
        model: 'Chevrolet',
        body: 'Minivan',
        year: 2020,
        color: 'White',
      }
    ]
  }
  render() {
    return (
      <>
        <Parent cars={this.state.cars}>  
          {(arr) => arr.map((item) => <Child model={item.model} body={item.body} year={item.year} color={item.color} />)}

        </Parent>
      </>
    )
  }
}
