import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    console.log('props todos: ', this.props.todos);
    return (
      <FlatList
        data={this.props.todos}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('todos: ', state.todos);
  return {
    todos: state.todos.todos,
  }
}

export default connect(mapStateToProps, null)(TodoList);