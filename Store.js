import { createStore, combineReducers } from 'redux';

import { reducer as todoReducer } from './src/todos/reducer';

const reducer = combineReducers({
  todos: todoReducer,
});

export default createStore(reducer);