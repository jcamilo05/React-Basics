# React tutorial

### This repo contain my notes about some small projects powered by react

### Create react

To create a react app without need to setting up the application manually, you can type the following command, it is important to have pre install npm

```javascript
npx create-react-app name_of_aplication

```

## React Hooks

React hooks are functions React provide us to help us to complete various tasks

### Usestate

UseState is most basic hook, this works when we want to assign a value to a varible, the variable could be a string,an array or an object, the following is an example where useState is used to assign a string to a varible.

But before UseState can be used, it must be called through an import as is show in the next

```javascript

import React, { useState } from "react"

```

```javascript

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

```
#### React UseState with arrays

The following chunk of code shows how an array can be assigned to a variable and then each element is called through a map funcion.

```javaScript

const UseStateArray = ()=>{
  const [people, setPeople] = useState(data);
  const removeItem = (id) =>{
      let newPerson = people.filter((person)=>person.id !== id)
      setPeople(newPerson)
  }
  return(
    <>
      {
        people.map((person)=>{
          const {id, name} = person;
          return(
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={()=> removeItem(id)}>Remove</button>
            </div>
          )
        })
      }
      <button className="btn" onClick={()=>{setPeople([])}}>Clear items</button>
    </>
  )
}l

```

In the previous code a event handler was used, remember if you want to use a function inside the Onclick, is preferable to make use of an array function

The filter function used in the code obove works in the following way:
1. An array must be passed and like map the filter will apply the condition typed 
2. The filter will return an array with the items who fullfill the condition setted in the filter condition




