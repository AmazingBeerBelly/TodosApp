import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { views as Todos } from './src/todos';
import store from './Store';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Todos />
      </Provider>
    )
  }
}