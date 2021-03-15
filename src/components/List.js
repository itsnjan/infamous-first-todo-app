import React from 'react';

export default function List(props) {
    // console.log("the props todolist from todolist.js", props.TodoList);
    return (
        <section>
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
