import { localStorageGetItem } from '../helpers/localStorage'

const tags = ['dark', 'primary', 'info', 'success', 'warning', 'danger']

export default {
  tasks: localStorageGetItem('tasks') || [],
  tags,
  filter: {
    search: '',
    tags,
  }
}
