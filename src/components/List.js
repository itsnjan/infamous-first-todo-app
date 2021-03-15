import React, { useState } from 'react';

export default function List(props) {
    // console.log("the props todolist from todolist.js", props.TodoList);
    return (
        <div>
          <h2>My todos</h2>
          <ul>
            {props.todoList.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
}
