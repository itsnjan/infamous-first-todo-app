import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import AddNewTodo from './components/AddNewTodo'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    // setTodoList(event.target.value);
    // setTodoList(todoList.push(event.target.value))
    console.log("event.target.value", event.target.value);
  }

  return (
    <div className="App">
      <AddNewTodo handleSubmit={handleSubmit} />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App
