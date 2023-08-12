import { Button } from 'looker-lens'
import * as React from 'react'
import { connect } from 'react-redux'
import { toggleCompleted } from '../utils/actions'
import { Todo } from '../utils/todo_utils'

​// State -> Props
const mapStateToProps = ( state: any, props: any) => {
  return {
    disabled: state.todos.filter((todo: Todo) => todo.completed ).length === 0,
    text: state.showCompleted ? 'Hide completed items' : 'Show completed items'
  }
}
​
// Dispatch -> props
const mapDispatchToProps = (dispatch: any) => {
  return {
    onClick: () => {
      dispatch(toggleCompleted())
    }
  }
}

// Component interface
interface ToggleProps {
  text: string,
  disabled: boolean,
  onClick: any
}

// Wraps a Lens button
const ButtonContainer = (props: ToggleProps) => {
  return (
    <Button variant="transparent"
            size="small"
            disabled={props.disabled}
            onClick={props.onClick}>
     {props.text}
    </Button>
  )
}
​
// Toggle button container
export const ToggleCompletedButton = connect(mapStateToProps, mapDispatchToProps)(ButtonContainer)
