import { localStorageGetItem } from '../helpers/localStorage'

export default {
  tasks: localStorageGetItem('tasks') || [],
  filter: {
    search: '',
  }
}
