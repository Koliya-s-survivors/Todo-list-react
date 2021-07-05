import {Component} from 'react';
// utils
import { filterPropsData } from './utils';

function renderChildItems (data) {
  return filterPropsData(data).map((item, i) => {
    return <p key={i}>{item.firstName} {item.lastName}</p>;
  });
}

class Parent extends Component {
  render() {
    return (
      <>
        {renderChildItems(this.props.data)}
      </>
    );
  }

}

export default Parent;
