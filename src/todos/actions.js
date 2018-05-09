import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

let todoId = 0;

export function addTodo(text) {
  console.log(text);
  return {
    type: ADD_TODO,
    text,
    id: todoId++,
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}
