import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

const initState = {
  visiable: 'all',
  todos: [],
}

export function reducer(state = initState, action) {
  switch(action.type) {
    case ADD_TODO: {
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            id: action.id,
            completed: false,
          }
        ]
      })
    }

    case TOGGLE_TODO: {
      return Object.assign({}, state, {
        todos: state.map((todoItem) => {
          if (todoItem.id === action.id) {
            return {...todoItem, completed: !todoItem.completed};
          } else {
            return todoItem;
          }
        })
      })
    }

    case REMOVE_TODO: {
      return Object.assign({}, state, {
        todos: state.map((todoItem) => {
          return todoItem.id !== action.id;
        })
      })
    }

    default: {
      return state;
    }
  }
}