
import { ITodo, TodoState } from "../utils/types";

// todo reducer
export const todoReducer = (state: TodoState, action: any) => {
  switch (action.type) {
    case 'TODO_ADD':
      const origId = state.todos[state.todos.length - 1].id
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length >= 1 ? origId + 1 : 1,
            name: action.name,
            priority: false,
          },
        ],
      };

    case 'TODO_REMOVE':
      return {
        ...state,
        todos: state.todos.filter((item: ITodo) => item.id !== action.id),
      };

    /**
     * added update by index
     */
    case 'TODO_PRIORITIZE':
      return {
        ...state,
        todos: state.todos.map((item: ITodo) => (item.id === action.id) ? { ...item, priority: !item.priority } : item),
      };
    //return {...state, todos: [...state.todos.slice(0, action.index), {...state.todos[action.index], priority: !state.todos[action.index].priority}, ...state.todos.slice(action.index+1)] };

    case 'TODO_RENAME':
      return {
        ...state,
        todos: state.todos.map((item: ITodo) => (item.id === action.id) ? { ...item, name: action.name } : item),
      };

    default: return state;
  }
}