import React from 'react'; 

// components
import ContentItems from './content-item'
 

export default class Content extends React.Component {
  render () {
    return(
      <>
        <ContentItems />
        <ContentItems />
        <ContentItems />
        <ContentItems />
      </>
    )
  };
};