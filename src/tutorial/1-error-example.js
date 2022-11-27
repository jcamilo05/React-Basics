import React from 'react';
import { useState } from 'react';

const Error = ()=>{
  let [title, setTitle] = useState("Random title")
  const handler = () => { 
    if(title === "Random title"){
      setTitle("Hello world")
    }else{
      setTitle("Random title")
    }
  }
  return <>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handler}>Change title</button>
  </>
}

export default Error;