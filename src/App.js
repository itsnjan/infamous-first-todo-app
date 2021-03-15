import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import AddNewTodo from './components/AddNewTodo'
import List from './components/List'
import Archive from './components/Archive'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [todo, setTodo] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList((prev) => 
      [todo, ...prev]
    )
    setTodo('');
  };

  const handleChange = ({ target }) =>
  setTodo(target.value);

  const removeTodo = (removeTodoIndex) => {
    setTodoList((prev) => {
    return prev.filter((item, index) => 
    index !== removeTodoIndex
    )
    },
    setArchiveList((prev) =>
    ['test', ...prev]
    )
  ) 
  }

  return (
    <div className="App">
      <AddNewTodo handleSubmit={handleSubmit} handleChange={handleChange} todo={todo} />
      <List todoList={todoList} removeTodo={removeTodo} />
      <Archive todoList={todoList} archiveList={archiveList} />
    </div>
  )
}

export default App
