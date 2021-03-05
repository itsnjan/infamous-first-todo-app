import React, { useState } from 'react';

export default function AddNewTodo() {
  const [todo, setTodo] = useState('');
  const handleChange = ({target}) => 
      setTodo(target.value);


    return (
        <div>
        <input value={todo} onChange={handleChange} type="text" />    
        </div>
    )
}
