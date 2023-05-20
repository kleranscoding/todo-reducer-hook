import { useState } from "react";
import { useTodoContext } from "../context/todo.context";
import TodoItemWithEdit from "./TodoItemWithEdit";
import TodoItemInlineEdit from "./TodoItemInlineEdit";
import "../css/TodoItem.css";

// /**
//  * ToDo Item
//  */
// const TodoItem = ({item, dispatch, index}: any) => {
//   const editTodoItem = (id: number, editType: string) => dispatch({type: editType === "setRemove" ? "TODO_REMOVE" : editType === "setTodo" ? "TODO_PRIORITIZE" : "", id})
//   return (
//     <li>
//       <h4 style={item.priority ? {textDecoration: "line-through"}: {}}>
//         {item.name}
//       </h4>
//       <button onClick={() => editTodoItem(item.id,"setTodo")} >
//         {item.priority ? "set UNDO" : "set TODO"}
//       </button>
//       <button onClick={() => editTodoItem(item.id,"setRemove")} >
//         delete
//       </button>
//     </li>
//   );
// }


/**
 * ToDo List
 */
const TodoList = () => {

  const {state, dispatch} = useTodoContext();

  const [withEdit, setTodoListMode] = useState(true);

  const toggleTodoListMode = () => setTodoListMode(!withEdit);

  const todos = state?.todos || [];

  /**
   * added update by index
   */
  return (
    <section className="render-todos">
      <h3> List of Tasks </h3>
      <button onClick={toggleTodoListMode} disabled={todos.length === 0} >
        {!withEdit ? "inline Editing" : "button Editing"}
      </button>
      <ul className="todo-list">
        { 
          todos.map(item => 
            withEdit ?  
              <TodoItemInlineEdit key={item.id} item={item} dispatch={dispatch} />
            : <TodoItemWithEdit key={item.id} item={item} dispatch={dispatch} />
          )
          //state.map((item, index) => <TodoItem key={index} index={index} item={item} dispatch={dispatch} />)
        }
      </ul>
    </section>
  );
}

export default TodoList;