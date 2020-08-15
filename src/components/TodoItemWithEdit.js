import React from "react";

const styles = {
  li: {
    margin: "10px"
  }
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

export default TodoItemWithEdit;