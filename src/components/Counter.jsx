
 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../store/action';
 
const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.count); 
   return (
       <>
           <div>
               Counter : {counter}
           </div>
           <div className="button">
               <button onClick={()=> dispatch(incrementCounter(1))}>IncrementBy 1</button>
               <button onClick={() => dispatch(decrementCounter(1))}>Decrement By 1</button>
               <button onClick={() => dispatch(incrementCounter(5))}>IncrementBy 5</button>
               <button onClick={() => dispatch(decrementCounter(3))}>Decrement By 3</button>
               <button onClick={()=>dispatch(resetCounter(0))}>Reset</button>
           </div>

       </>
   )
 }
 
export default Counter;
 