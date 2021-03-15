import React, { useState } from 'react';

export default function AddNewTodo(props) {

  return (
    <section>
      <form onSubmit={props.handleSubmit}>
        <label>
          Add a new todo:
          <input value={props.todo} onChange={props.handleChange} type="text" />
        </label>
        <input type="submit" value="Add ToDo" />
      </form>
</section>
  )
}
