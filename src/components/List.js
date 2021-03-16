import React from 'react';

export default function List(props) {
      return (
        <section className="flex--column flex--align-center">
          <h2>My todos</h2>
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
