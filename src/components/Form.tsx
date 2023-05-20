import { useRef } from "react";
import { useTodoContext } from "../context/todo.context";

const styles = {
  formGroup: {
    display: "flex",
    flexDirection: "column"

  },
  inputText: {
    width: "50%",
    height: "25px",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "16pt",
    margin: "10px"
  },
  button: {
    fontSize: "14pt",
    borderRadius: "5px",
    border: 0,
    padding: "5px;"
  }
}

const Form = ({...props}) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useTodoContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let aaa = ""
    if (inputRef.current) {
      aaa = inputRef.current.value;
    }
    if (!aaa || aaa.trim() === "") return;
    dispatch({type: "TODO_ADD", name: aaa});
    inputRef.current && (inputRef.current.value = "");
  }

  return (
    <section>
      <form onClick={handleSubmit}>
        <h3>ToDo Form</h3>
        <input ref={inputRef} style={styles.inputText} 
          type="text" placeholder="enter a task" 
        />
        <button type="submit">
          Add a Task
        </button>

      </form>
    </section>
  );

}

export default Form;