import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class Todos extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddTodo />
        <TodoList />
      </View>
    )
  }
}