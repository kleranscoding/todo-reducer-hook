import { FormEvent, useState } from "react";
import '../css/TodoItem.css';


/**
 * TodoItem (inline editing)
 * onClick name/title to enter input mode
 * onBlur to save automatically and exit input mode
 */
const TodoItemInlineEdit = ({item, dispatch}: any) => {
  
  const [name, setText] = useState(item.name);
  const [isEdit, setEditMode] = useState(false);

  const changeEditMode = () => setEditMode(!isEdit)

  const editTodoItem = (id: number, editType: string) => dispatch({type: editType === "setRemove" ? "TODO_REMOVE" : editType === "setTodo" ? "TODO_PRIORITIZE" : "", id})

  const saveText = (e: FormEvent<HTMLInputElement>, id: number, isSaving: boolean) => {
    e.preventDefault();
    if (isSaving) dispatch({type: "TODO_RENAME", id, name})
    changeEditMode();
  }

  return (
    <li data-id={item.id} className="todo-item">
      {!isEdit ? 
        <h4 onClick={changeEditMode} className={item.priority ? "with-edit completed" : "with-edit incompleted"}
          style={item.priority ? {textDecoration: "line-through"}: {}}>
          {item.name}
        </h4>
        :
        <input type="text" value={name} onChange={e => setText(e.target.value)} autoFocus={true} onBlur={e => saveText(e, item.id, true)}/>
      }
      <button onClick={() => editTodoItem(item.id,"setTodo")} >
        {item.priority ? "set UNDO" : "set TODO"}
      </button>
      {/* <button onClick={changeEditMode}> edit </button> */}
      <button onClick={() => editTodoItem(item.id,"setRemove")} >
        delete
      </button>
    </li>
  );

}

export default TodoItemInlineEdit;