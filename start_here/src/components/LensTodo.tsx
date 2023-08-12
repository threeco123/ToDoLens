import * as React from 'react'
import './LensTodo.css'

// Lens components
import {
  Card,
  CardContent,
  Flex,
  FlexItem,
  Link,
  theme,
  ThemeProvider,
} from 'looker-lens'

// Some useful utilities.
import
{
  TodoAppState,
  todoFromStr
} from '../utils/todo_utils'

// Some data to seed app with.
import { todoItems } from '../utils/todo_items'

/**
 * Every React app is itself a component. Here we will define a basic container component,
 * an app state, and a composition of Lens and user defined components
 * to create a sweet Todo app.
 */
export default class LensTodo extends React.Component<{}, TodoAppState> {

  constructor(props: {}) {
    super(props)

    // Initial state of app. This can come from anything (e.g local storage, a server call, etc)
    // but for simplicity we will simply set here every time we start app.
    this.state = {
      showCompleted: false,
      todos: todoItems.map(todoFromStr),
    }
  }

  // The render function is called anytime a component's state or properties (props) change.
  public render() {

    return (
      <ThemeProvider theme={theme}>
        <Flex height="100%" justifyContent="center" alignItems="flex-start">
          <FlexItem>
            <Card className="todo-card" raised>
              <CardContent>
                It worked!  Add a <Link href="https://lens.looker.com/#/Components/Text?id=heading">title</Link> to the
                top of the card, and then Try and get the todos in your app component state to display here.  The todos
                then give a reasonable workflow for building out rest of app
              </CardContent>
            </Card>
          </FlexItem>
        </Flex>
      </ThemeProvider>
    )
  }
}
