import * as React from 'react'
import { connect } from 'react-redux'
import { FilteredTodos } from './FilteredTodos'

​// Uses the state tree to define whether or not to show a FilteredTodos list
const mapStateToProps = ( state: any ) => ({
  show: state.showCompleted
})
​
// Component interface
interface ToggleProps {
  show: boolean,
}

// Container that simply acts like a conditional wrapper around a FilteredTodos list.
const CompletedTodoContainer = (props: ToggleProps) => (
  props.show ? <FilteredTodos completed={true} /> : <div />
)
​
// Create container.
export const CompletedTodos = connect(mapStateToProps)(CompletedTodoContainer)
