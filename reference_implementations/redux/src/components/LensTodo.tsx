import * as React from 'react'
import './LensTodo.css'

import {
  Card,
  CardContent,
  Flex,
  FlexItem,
  Heading,
  theme,
  ThemeProvider,
} from 'looker-lens'

// User defined components.
import { AddTodo } from '../containers/AddTodo'
import { CompletedTodos } from '../containers/CompletedTodos'
import { FilteredTodos } from '../containers/FilteredTodos'
import { ToggleCompletedButton } from '../containers/ToggleCompletedButton'
import { Divider } from './Divider'

/**
 * Every React app is itself a component. Here we will define a basic container component,
 * an app state, and a composition of Lens and user defined components
 * to create a sweet Todo app.
 */
export const LensTodo = () => (
  <ThemeProvider theme={theme}>
    <Flex bg={theme.colors.semanticColors.primary.lighter} height="100%" justifyContent="center" alignItems="flex-start">
      <FlexItem>
        <Card className="todo-card" raised>
          <CardContent>
            <Flex justifyContent="center">
              <Heading size="d3">Get stuff done with Lens</Heading>
            </Flex>
            <AddTodo />
            <FilteredTodos completed={false} />
            <Divider />
            <Flex justifyContent="center">
              <ToggleCompletedButton />
            </Flex>
            <CompletedTodos />
          </CardContent>
        </Card>
      </FlexItem>
    </Flex>
  </ThemeProvider>
)
