import { Component } from 'react';

/** Class TodoListItemModel creates object whith task parameters
   *
   * @name TodoListItemModel
   *
   * @param paramObj (object, {taskName: 'string', isDone: 'boolean'}).
   * @return object 
   */
class TodoListItemModel {
  constructor(obj) {

    this.taskNameValidation(obj.taskName);
    this.isDoneValidation(obj.isDone);

    Object.defineProperties(this, {
      'taskName': {
        value: obj.taskName,
        enumerable: true,
      },

      'taskId': {
        value: Date.now(),
        enumerable: true,
      },

      'isDone': {
        value: obj.isDone,
        enumerable: true,
      },
    })
  }

  // taskNameValidation(taskName) {
  //   if (typeof taskName !== 'string') {
  //     throw new Error('taskName is not string type')
  //   }
  //   if (!taskName.trim()) {
  //     throw new Error('taskName is empty string')
  //   }
  // }

  // isDoneValidation(isDone) {
  //   if (typeof isDone !== 'boolean') {
  //     throw new Error('isDone is not boolean type')
  //   }
  // } 
};

Object.defineProperties(TodoListItemModel.prototype, {
  /** Valitade task name
     *
     * @name taskNameValidation
     *
     * @param taskName (string)
     * @throws Error type exeption or empty string field exeption
     * @return true
     */

  taskNameValidation: {
    value: function (taskName) {
      if (typeof taskName !== 'string') {
        throw new Error('taskName is not string type')
      };
      if (!taskName.trim()) {
        throw new Error('taskName is empty string')
      };
      return true;
    },
  },

  /** Valitade task isDone property
    *
    * @name taskIsDoneValidation
    *
    * @param isDone (boolean).
    * @throws Error if type exeption is not boolean.
    * @return true
    */

  isDoneValidation: {
    value: function (isDone) {
      if (typeof isDone !== 'boolean') {
        throw new Error('isDone is not boolean type')
      }
      return true;
    },
  },
});


/** class TodoListStore contains store with task item models and methods handling it
   *
   * @name TodoListStore
   *
   * @returns object
   */
export default class TodoListStore extends Component {
  constructor() {
    super();

    this.state = {
      store: [{
        taskName: 'Ded ugomonucb',
        taskId: '1',
        isDone: true,
      }],
    }
  }

  createTask = (paramObj) => {
    const newModel = new TodoListItemModel({
      taskName: paramObj.taskName,
      isDone: paramObj.isDone ? true : false
    });

    this.setState((state) => { return state.store = [newModel, ...state.store] });
  }

  render() {
    return (
      <>
        {this.props.children({ taskList: this.state.store, createTask: this.createTask })}
      </>
    )
  }
};

// Object.defineProperties(TodoListStore.prototype, {
//   /** TodoListStore createTask method. creates new object from TaskListItemModel
//      *
//      * @name createTask
//      *
//      * @param paramObj  (object, {taskName: 'string'})
//      * @return object ({taskId, taskName, isDone})
//      */
//   createTask: {
//     value: function (paramObj) {
//       const newModel = new TodoListItemModel({
//         taskName: paramObj.taskName,
//         isDone: paramObj.isDone ? true : false
//       });

//       this.setState((state) => { return state.store = [newModel, ...state.store] });
//     },

//   }
// })
