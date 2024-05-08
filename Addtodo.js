const { createStore } = require('redux');

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Define redux action creators
let nextTodoId = 0;

const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// Define reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const store = createStore(todoReducer);

module.exports = store;
