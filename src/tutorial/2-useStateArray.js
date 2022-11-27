import React, { useState } from "react"
import {data} from '../data'

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
}
    
 

export default UseStateArray;