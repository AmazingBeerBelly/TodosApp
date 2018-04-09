import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import { connect } from 'react-redux';

import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor() {
    super();
    this.onTodoTextChanged = this.onTodoTextChanged.bind(this);

    this.state = {
      todoText: '',
    };
  }

  onTodoTextChanged(text) {
    console.log(text);
    this.setState({ todoText: text });
  }

  render() {
    return (
      <View style={{ width: '100%', height: 50, marginTop: 20, flexDirection: 'row' }}>
        <TextInput 
          style={{ width: 200, height: 20, marginTop: 30, borderBottomWidth: 1, marginLeft: 20 }}
          placeholder='todo text'
          onChangeText={this.onTodoTextChanged}
        >
        </TextInput>
        <TouchableHighlight
          style={{ width: 70, height: 20, borderWidth: 1, marginLeft: 10, marginTop: 30 }}
          onPress={() => {this.props.onAddTodoClick(this.state.todoText);}}
        >
          <Text>AddTodo</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodoClick: (todoText) => dispatch(addTodo(todoText)),
  };
}

export default connect(null, mapDispatchToProps)(AddTodo);
