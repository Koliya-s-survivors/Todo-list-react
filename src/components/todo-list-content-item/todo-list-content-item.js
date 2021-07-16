import React from 'react';

import Time from '../time';
import Title from '../title';

export default class TodoListContentItem extends React.Component {
  render() {
    const { taskName, isDone, taskId } = this.props;
    return(
      <li key={taskId}>
        <p>{taskName}</p>
        <input type='button' value='delete' /> 
        <input type='button' value='update' />
        <input type='button' value={ isDone? 'undone' : 'done' } />
        <Time isTime={new Date().toLocaleTimeString()}>
          <Title /> 
        </Time>
      </li>
    )
  }
};