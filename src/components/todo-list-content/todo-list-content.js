import React from 'react';

import TodoListContentItem from '../todo-list-content-item';

export default class TodoListContent extends React.Component {
  render() {    
    return(       
      <ul>       
        {this.props.taskList.map(function(item){
          return <TodoListContentItem key={item.taskId} taskName={item.taskName} isDone={item.isDone}/>
        })}
      </ul>
    )
  }
};