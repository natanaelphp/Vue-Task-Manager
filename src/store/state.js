import { localStorageGetItem } from '../helpers/localStorage'

export default {
  tasks: localStorageGetItem('tasks') || [],
  tags: [
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
  ],
  filter: {
    search: '',
    tags: [
      'dark',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
    ],
  }
}
