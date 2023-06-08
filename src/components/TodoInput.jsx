import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from "uuid";
import { addTodo } from '../store/action';
import { Input, Button } from '@chakra-ui/react';
import axios from "axios";

const TodoInput = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const handleAdd =async () => {
      window.location.reload()
      let data = await axios.post("http://localhost:8080/todos", {
        id: uuid(),
        value: title,
       }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // dispatch(addTodo(data))

  }

  return ( 
    <div>
          <Input placeholder='Add Todo' m={"55px"} width={"266px"} value={title} onChange={(e)=>setTitle(e.target.value)} />
      <Button colorScheme='blue' ml={"6px"} onClick={handleAdd}>Add Todo</Button>
    </div>
  )
}

export default TodoInput;
