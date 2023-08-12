import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker'

// Our top level app component
import { LensTodo } from './components/LensTodo'

// Redux stuff
import { Provider } from 'react-redux'
import {
  combineReducers,
  createStore
} from 'redux'
import * as reducers from './utils/reducers'

import { todoItems } from './utils/todo_items'
import { todoFromStr } from './utils/todo_utils'

// App store
const appReducers = combineReducers(reducers)

const defaultState = {
  showCompleted: false,
  todos: todoItems.map(todoFromStr),
}

const store = createStore(appReducers,
                          defaultState,
                          (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <LensTodo />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
