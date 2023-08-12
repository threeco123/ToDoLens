import * as React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../utils/actions'
import './AddTodo.css'

import {
  Box,
  Button,
  FieldText,
  Flex,
  Form
} from 'looker-lens'

interface AddTodoProps {
  dispatch: any
}

interface AddTodoState {
  input: string
}

class AddTodoComponent extends React.Component<AddTodoProps, AddTodoState> {

  constructor(props: AddTodoProps) {
    super(props)

    this.state = {
      input: ''
    }
  }

  // I used a form in my component so clicking 'Enter' when typing would call my add action.
  // Notice I did have to prevent default
  public submit = (event: any) => {
    event.preventDefault()
    const trimmedInput = this.state.input.trim()

    if (!trimmedInput) {
      return
    }

    this.props.dispatch(addTodo(trimmedInput))

    this.setState({
      input: ''
    })
  }

  public onChange = (event: any) => {
    this.setState({
      input: event.target.value
    })
  }

  public render() {

    const { input } = this.state
    const disabled = input.trim().length === 0

    const textProps = {
      onChange: this.onChange,
      placeholder: 'Add a todo...',
      value: input,
    }

    return (
     <Form onSubmit={this.submit}>
      <Flex mt="medium">
        <Box className="todo-input-container">
          <FieldText {...textProps} />
        </Box>
        <Button size="small" disabled={disabled}>Add it</Button>
      </Flex>
    </Form>
    )
  }
}

export const AddTodo = connect()(AddTodoComponent)
