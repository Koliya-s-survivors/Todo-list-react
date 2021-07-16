import React from 'react';

export default class TodoListControl extends React.Component {
  state = {
    newName: 'default',
  }

  changeNewName(newName) {
    this.setState({ newName });   
  }

  render() {    
    return (
      <div class='todoListControl'>
        <input type='text' placeholder='enter taskName' onChange={(event) => this.changeNewName(event.target.value)} />
        <input type='button' value='addTask' onClick={() => this.props.createTask({ taskName: this.state.newName, isDone: false })} />
      </div>
    )
  }
};