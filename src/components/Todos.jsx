import React, { useEffect} from 'react'
import TodoInput from './TodoInput';
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../store/action';

const Todos = () => {
    const {isLoading,isError,data} = useSelector(state => state.todos);
    const dispatch = useDispatch();
    useEffect(() => {
        getTodos(dispatch)
    }, []);
    console.log(isLoading,isError,data)
    if (isLoading) return <div>Loading....</div>
    if(isError) return <div>Error Occured while getting data</div>
    return (
        <div>
            
      Todos:{data.length},
      <div>
         <TodoInput/>
      </div>
      <div>
         {data.map((el) => {
           return <Todo key={el.id} {...el} />
          })}
       </div>
    </div>
  )
}

export default Todos
