import { localStorageSetItem } from '../helpers/localStorage'

export default {

  NEW_TASK (state, task) {
    state.tasks.push(task)
    localStorageSetItem('tasks', state.tasks)
  },

  EDIT_TASK (state, task) {
    let index = state.tasks.indexOf(task)
    state.tasks[index] = task
    localStorageSetItem('tasks', state.tasks)
  },

  DELETE_TASK (state, task) {
    let index = state.tasks.indexOf(task)
    state.tasks.splice(index, 1)
    localStorageSetItem('tasks', state.tasks)
  },

}
