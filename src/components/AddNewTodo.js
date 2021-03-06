import React, { useState } from 'react';

export default function AddNewTodo(props) {
  const [todo, setTodo] = useState('');
  

  const handleChange = ({ target }) =>
    setTodo(target.value);

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Add a new todo:
          <input value={todo} onChange={handleChange} type="text" />
        </label>
        <input type="submit" value="Add ToDo" />
      </form>
      <p>
        <br />
        {todo}
      </p>
    </div>
  )
}
