import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../store/action';

const Todo = ({ id, value }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        deleteTodo(dispatch,id)
    }
  return (
    <div style={{margin:"13px", display:"flex",justifyContent:"space-around"}}>
          <h4>{value}</h4>
          <button style={{width:"100px",height:"33px"}} onClick={handleDelete}>Delete TODO</button>
    </div>
  )
}

export default Todo;
