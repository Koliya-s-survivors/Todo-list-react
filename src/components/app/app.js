import React from 'react';

import TodoListStore from '../todo-list-store/todo-list-store';
import TodoList from '../todo-list';

export default class App extends React.Component {
  render() {
    return (
      <TodoListStore>
        {({ taskList, createTask }) => <TodoList taskList={taskList} createTask={createTask} />}
      </TodoListStore>

    )
  }
};