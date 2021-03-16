import React, { useState } from 'react';

export default function AddNewTodo(props) {

  return (
    <section>
      <form onSubmit={props.handleSubmit} className="field has-addons">
        <div className="control">
          {/* <label className="label">
            Add a new todo: */}
            <input value={props.todo} onChange={props.handleChange} type="text" placeholder="Add a todo" className="input" />
          {/* </label> */}
        </div>
        <div className="control">
        <input type="submit" value="Add ToDo"  className="button is-primary" />
        </div>
      </form>
</section>
  )
}
