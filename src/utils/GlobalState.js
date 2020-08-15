import React from 'react';
import initData from './store';

const TodoContext = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {

    case 'TODO_ADD':
      return [...state, 
        {
          id: state.length >= 1 ? parseInt(state[state.length-1].id) + 1 : 1,
          name: action.name,
          priority: false
        }
      ];

    case 'TODO_REMOVE': return state.filter( _ => _.id !== action.id );
    
    case 'TODO_PRIORITIZE': 
      return state.map(item => (item.id === action.id) ? {...item, priority: !item.priority } : item);

    case 'TODO_RENAME': 
      return state.map(item => (item.id === action.id) ? {...item, name: action.name } : item
    );

    default: return state;
  }
}

const TodoProvider = ({...props}) => {
  const [state, dispatch] = React.useReducer(reducer, initData);
  return <TodoContext.Provider value={{state, dispatch }} { ...props } />
};

const useTodoContext = () => React.useContext(TodoContext);

export { TodoProvider, useTodoContext };