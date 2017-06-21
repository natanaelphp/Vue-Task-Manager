export default {
  
  NEW_TASK (state, task) {
    state.tasks.push(task)
  },

  EDIT_TASK (state, task) {
    let index = state.tasks.indexOf(task)
    state.tasks[index] = task
  },

  DELETE_TASK (state, task) {
    let index = state.tasks.indexOf(task)
    state.tasks.splice(index, 1)
  },

}
