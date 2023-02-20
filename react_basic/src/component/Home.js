import { text } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { useState } from 'react'

export const Home = (props) => {
  const[input,setInput]= useState('red')

  const newValue = (e)=>{
    setInput(e.target.value)
  }

  const submitHandeler=(e)=>{
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={submitHandeler}>
         <input type="text" name='text' placeholder='Add Todo list'/>
         <button onClick={newValue}>Add List</button>
      </form>
      <h1>{input}</h1>
    </div>
  )
}
