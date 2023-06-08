import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../store/action';
import { Button } from '@chakra-ui/react';


const Todo = ({ id, value }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        deleteTodo(dispatch,id)
    }
  return (
    <div>
      <div style={{ margin: "13px", display: "flex", justifyContent: "space-between", margin:"50px" }}>
        <h1  style={{color:"green",fontSize:"31px"}}>{value}</h1>
        <div>
        <Button colorScheme='red' p={3} style={{ width: "100px", height: "33px", border: "1px solid black" }} onClick={handleDelete}>Delete TODO</Button>
        </div>
      </div>
    </div>
   
  )
}

export default Todo;
