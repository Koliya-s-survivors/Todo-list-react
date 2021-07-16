import React from 'react';

import TodoListControl from '../todo-list-control';
import TodoListContent from '../todo-list-content';

export default class TodoList extends React.Component {
  render() {
    // const taskList = [
    //   {
    //   taskName: 'taskName1',
    //   isDone: false,
    //   taskId: '1'
    // },
    // {
    //   taskName: 'taskName2',
    //   isDone: false,
    //   taskId: '2'
    // },
    // {
    //   taskName: 'taskName3',
    //   isDone: true,
    //   taskId: '3'
    // },
    // {
    //   taskName: 'taskName4',
    //   isDone: false,
    //   taskId: '4'
    // }]
    return (
      <div>
        <TodoListControl createTask={this.props.createTask} />
        <TodoListContent taskList={this.props.taskList} />
      </div>
    )
  }
};