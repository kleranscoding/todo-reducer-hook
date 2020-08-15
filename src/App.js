import React from 'react';
import './css/App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodoProvider } from './utils/GlobalState';

function App() {

  return (
    <div className="App">
      <TodoProvider>
        <h1> ToDo (Reducer Hook)  </h1>
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
