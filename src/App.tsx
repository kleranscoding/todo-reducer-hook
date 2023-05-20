
import { Form, TodoList } from "./components";
import { TodoProvider } from "./context/todo.context";
import './css/App.css';

function App() {

  return (
    <div className="app">
      <TodoProvider>
        <h1> ToDo App </h1>
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
