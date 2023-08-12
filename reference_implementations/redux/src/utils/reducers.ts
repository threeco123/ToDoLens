import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
  UPDATE_TODO,
} from './actions'

import {
  Todo,
  todoFromStr
} from './todo_utils'

export const showCompleted = (state = false, action: any) => {
  switch (action.type) {
    case TOGGLE_COMPLETED:
      return !state
    default:
      return state
  }
}

export const todos = (state = [], action: any) => {
  switch (action.type) {

    case ADD_TODO:
      return [...state, todoFromStr(action.text)]

    case REMOVE_TODO:
      return state.filter((t: Todo) => t.id !== action.id)

    case UPDATE_TODO:
      const { id, completed, on} = action
      return state.map((t: Todo) => (t.id !== id ? t : { ...t, completed, on }))

    default:
      return state
  }
}
