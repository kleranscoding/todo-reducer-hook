import React from "react";
import { useTodoContext } from "../utils/GlobalState";

const styles = {
  ul: {
    display: "flex",
    flexDirection: "column",
    listStyleType: "none",
  },
  li: {
    width: "100%",
    margin: "10px"
  },
}


const TodoItemWithEdit = props => {
  
  const [name, setText] = React.useState(props.item.name);
  const [isEdit, setEditMode] = React.useState(false);

  const changeEditMode = () => setEditMode(!isEdit)

  const editTodoItem = (id, editType) => props.dispatch({type: editType === "setRemove" ? "TODO_REMOVE" : editType === "setTodo" ? "TODO_PRIORITIZE" : "", id})

  const saveText = (e, id, isSaving) => {
    e.preventDefault();
    if (isSaving) props.dispatch({type: "TODO_RENAME", id, name})
    changeEditMode();
  }

  return (
    <li style={styles.li} data-id={props.item.id} >
      {!isEdit ? 
      <>
        <h4 style={props.item.priority ? {textDecoration: "line-through"}: {}}>
          {props.item.name}
        </h4>
        <button onClick={() => editTodoItem(props.item.id,"setTodo")} >
          {props.item.priority ? "set UNDO" : "set TODO"}
        </button>
        <button onClick={changeEditMode}>
          edit
        </button>
        <button onClick={() => editTodoItem(props.item.id,"setRemove")} >
          delete
        </button>
      </>
      :
      <form>
        <input type="text" value={name} onChange={e => setText(e.target.value)} />
        <button type="submit" onClick={e => saveText(e, props.item.id, true)}>
          save
        </button>
        <button onClick={e => saveText(e, props.item.id, false)}>
          cancel
        </button>
      </form>
      }
    </li>
  );

}

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

const TodoList = () => {

  const {state, dispatch} = useTodoContext();

  return (
    <section>
      <h3> List of Tasks </h3>
      <ul style={styles.ul}>
        { 
          state.map(item => 
            <TodoItemWithEdit key={item.id} item={item} dispatch={dispatch} />
            //<TodoItem key={item.id} item={item} dispatch={dispatch} />
          )
        }
      </ul>
    </section>
  );
}

export default TodoList;