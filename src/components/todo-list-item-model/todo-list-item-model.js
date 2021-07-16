import { Component } from 'react';

export default class TodoListItemModel extends Component {
  constructor(obj) {
   super();

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

  render() {
    return (
      null
    );
  }
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
