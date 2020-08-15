import React from "react";
import { useTodoContext } from "../utils/GlobalState";
import TodoItemWithEdit from "./TodoItemWithEdit";

/**
 * Styling
 */
const styles = {
  ul: {
    display: "flex",
    flexDirection: "column",
    listStyleType: "none",
  },
  li: {
    margin: "10px"
  },
}

/**
 * ToDo Item
 */
const TodoItem = ({item, dispatch}) => {

  const editTodoItem = (id, editType) => dispatch({type: editType === "setRemove" ? "TODO_REMOVE" : editType === "setTodo" ? "TODO_PRIORITIZE" : "", id})
  
  return (
    <li style={styles.li}>
      <h4 style={item.priority ? {textDecoration: "line-through"}: {}}>
        {item.name}
      </h4>
      <button onClick={() => editTodoItem(item.id,"setTodo")} >
        {item.priority ? "set UNDO" : "set TODO"}
      </button>
      <button onClick={() => editTodoItem(item.id,"setRemove")} >
        delete
      </button>
    </li>
  );
}


/**
 * ToDo List
 */
const TodoList = () => {

  const {state, dispatch} = useTodoContext();

  const [withEdit, setTodoListMode] = React.useState(true);

  const toggleTodoListMode = () => setTodoListMode(!withEdit)

  return (
    <section>
      <h3> List of Tasks </h3>
      <button onClick={toggleTodoListMode}>
        {withEdit ? "without Edit Button" : "with Edit Button"}
      </button>
      <ul style={styles.ul}>
        { 
          state.map(item => 
            withEdit ?  
              <TodoItemWithEdit key={item.id} item={item} dispatch={dispatch} />
            : <TodoItem key={item.id} item={item} dispatch={dispatch} />
          )
        }
      </ul>
    </section>
  );
}

export default TodoList;