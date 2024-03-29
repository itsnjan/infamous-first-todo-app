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
        [todoList[removeTodoIndex], ...prev]
      )
    )
  }

  const deleteArchive = () => {
    setArchiveList([])
  }

  return (
    <div className="App is-flex is-flex-direction-column is-align-items-center">
      <AddNewTodo handleSubmit={handleSubmit} handleChange={handleChange} todo={todo} />
      <List todoList={todoList} removeTodo={removeTodo} />
      <Archive todoList={todoList} archiveList={archiveList} deleteArchive={deleteArchive} />
    </div>
  )
}

export default App
