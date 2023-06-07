import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from "uuid";
import { addTodo } from '../store/action';

const TodoInput = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const handleAdd = () => {
        const payloaad = {
            id: uuid(),
            title,
        }
        dispatch(addTodo(payloaad));
    }
  return (
    <div>
          <input placeholder='Add Todo' value={title} onChange={(e)=>setTitle(e.target.value)} />
          <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default TodoInput
