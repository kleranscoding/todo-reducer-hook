import { 
  createContext,
  FC, 
  useContext,
  useReducer, 
} from "react";
import { initData } from "../utils/dummyData";
import { TodoContextType } from "../utils/types";
import { todoReducer } from "./todo.reducers";

// create init state
const initState = {
  todos: initData,
}

// create init context
const initContext = {
  state: null,
  dispatch: () => null,
}

// todo context
export const TodoContext = createContext<TodoContextType>(initContext);

// todo provider
const TodoProvider: FC = ({...props}) => {
  
  const [state, dispatch] = useReducer(todoReducer, initState);
  
  return (
    <TodoContext.Provider
      value={{ state, dispatch }} 
      { ...props } 
    />
  );

}

// todo useContext
const useTodoContext = () => useContext(TodoContext);

export { TodoProvider, useTodoContext };