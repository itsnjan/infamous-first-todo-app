import React, { useState } from 'react';

export default function AddNewTodo(props) {
  // const [todo, setTodo] = useState('');
  

  // const handleChange = ({ target }) =>
  //   setTodo(target.value);

  return (
      <form onSubmit={props.handleSubmit} className=''>
        <label>
          Add a new todo:
          <input value={props.todo} onChange={props.handleChange} type="text" />
        </label>
        <input type="submit" value="Add ToDo" />
      </form>
      // <p>
      //   <br />
      //   {props.todo}
      // </p>

  )
}
