import { Dispatch } from "react";

// todo interface
export interface ITodo {
  id: number;
  name: string;
  priority: boolean;
}

// todo context type
export type TodoContextType = {
  state: {
    todos: ITodo[];
  } | null;
  dispatch: Dispatch<any>;
}

// todo state
export type TodoState = {
  todos: ITodo[];
}