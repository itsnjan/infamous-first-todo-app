import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import AddNewTodo from './components/AddNewTodo'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState('');
  const handleSubmit = ({ target }) => {
    target.preventDefault();
  }

  return (
    <div className="App">
    <AddNewTodo handleSubmit={handleSubmit} />
    <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
