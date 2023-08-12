import * as React from 'react'

import {
  RemoveTodoCallback,
  Todos,
  UpdateTodoCallback,
} from '../utils/todo_utils'

import {
  Box,
  List
} from 'looker-lens'

import { TodoElement } from './TodoElement'

interface TodoListProps {
  todos: Todos,
  updateTodo: UpdateTodoCallback,
  removeTodo: RemoveTodoCallback
}

export const TodoList = (props: TodoListProps) => (
  <Box mt='medium'>
    <List>
      {
        props.todos.map((todo: any) => (
          <TodoElement key={todo.id}
                       todo={todo}
                       updateTodo={props.updateTodo}
                       removeTodo={props.removeTodo} />

        ))
      }
    </List>
  </Box>
)
