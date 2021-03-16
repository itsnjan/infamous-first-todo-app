import React from 'react';

export default function List(props) {
  return (
    <section className="is-flex is-flex-direction-column is-align-items-center">
      <h2 className="title is-2 mt-5">My todos</h2>
      <ul>
        {props.todoList.map((item, index) => (
          <li key={index} onClick={() => props.removeTodo(index)}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
