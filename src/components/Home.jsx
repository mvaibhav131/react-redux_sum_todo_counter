import React from 'react';
import { Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate()
  return (
    <div style={{margin:"100px"}}>
      
          <Button colorScheme='teal' variant='outline' m={"5px"} onClick={()=>{navigate("/todo")}} >Todo</Button>
          <Button colorScheme='teal' variant='outline' m={"5px"} onClick={() => { navigate("/counter") }}>Counter</Button>
          <Button colorScheme='teal' variant='outline' m={"5px"} onClick={() => { navigate("/sum") }}>Sum Calculator</Button>
          
    </div>
  )
}

export default Home;
