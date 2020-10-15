import React from 'react';
import './App.css';
import TodoForm from './Component/TodoForm';

function App() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
     <TodoForm />
    </div>
  );
}

export default App;
