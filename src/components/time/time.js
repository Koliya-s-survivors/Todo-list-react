import React from 'react';

export default class Time extends React.Component {
  render() {

    return(
      <>
        {this.props.children} 
        <p>{this.props.isTime}</p>
      </>
       
    )
  };
};