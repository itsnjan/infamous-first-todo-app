import React from 'react';

export default function AddNewTodo(props) {

  return (
    <section className="is-flex is-flex-direction-column">
      <h1 className="title is-1">Save your todos</h1>
      <form onSubmit={props.handleSubmit} className="field has-addons">
        <div className="control">
          <input value={props.todo} onChange={props.handleChange} type="text" placeholder="Add a todo" aria-label="Add a todo" className="input" />
        </div>
        <div className="control">
          <input type="submit" value="Add ToDo" className="button is-primary" />
        </div>
      </form>
    </section>
  )
}
