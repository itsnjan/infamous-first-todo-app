import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import AddNewTodo from './components/AddNewTodo'
import List from './components/List'

function App() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // setTodoList(event.target.value);
    // setTodoList(todoList.push(event.target.value))
    console.log("event.target.value", todo);
    setTodoList((prev) => 
      [todo, ...prev]
    )
  
    // console.log("todoList:", todoList)
    setTodo('');
  };

  const handleChange = ({ target }) =>
  setTodo(target.value);

  return (
    <div className="App">
      <AddNewTodo handleSubmit={handleSubmit} handleChange={handleChange} todo={todo} />
      <List todoList={todoList} />
    </div>
  )
}

export default App
