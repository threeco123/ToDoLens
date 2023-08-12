export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export const addTodo = (text: string) => ({
  text,
  type: ADD_TODO,
})

export const updateTodo = (id: number, completed: boolean, on?: Date) => ({
  completed,
  id,
  on,
  type: UPDATE_TODO,
})

export const removeTodo = (id: number) => ({
  id,
  type: REMOVE_TODO,
})

export const toggleCompleted = () => ({
  type: TOGGLE_COMPLETED,
})
