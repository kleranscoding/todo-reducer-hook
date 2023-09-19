import React from 'react';
import './css/App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodoProvider } from './utils/GlobalState';

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
