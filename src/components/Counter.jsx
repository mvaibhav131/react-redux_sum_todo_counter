
 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../store/action';
import {Button } from '@chakra-ui/react';
 

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.count); 
   return (
       <>
           <div style={{color:"teal", fontSize:"40px"}}>
               Counter : {counter}
           </div>
           <div className="button">
               <Button colorScheme='orange' m={3} onClick={()=> dispatch(incrementCounter(1))}>IncrementBy 1</Button>
               <Button colorScheme='orange' m={3} onClick={() => dispatch(decrementCounter(1))}>Decrement By 1</Button>
               <Button colorScheme='orange' m={3} onClick={() => dispatch(incrementCounter(5))}>IncrementBy 5</Button>
               <Button colorScheme='orange' m={3} onClick={() => dispatch(decrementCounter(3))}>Decrement By 3</Button>
               <Button colorScheme='orange' m={3} onClick={()=>dispatch(resetCounter(0))}>Reset</Button>
           </div>

       </>
   )
 }
 
export default Counter;
 