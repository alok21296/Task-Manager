import React,{useState} from 'react'
import axios from 'axios'

export const TodoForm = ({addtodo}) => {
  const [value,setValue]=useState("")
  const handleClick=(e)=>{
    axios.post("http://localhost:4000/todo",{task:value})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    e.preventDefault();
    addtodo(value)
    setValue("")
  }
  return (
    <form className="TodoForm" >
        <input type="text" className="todo-input" value={value} placeholder='What is the task today??' 
        onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleClick} className='todo-btn'>Add Task</button>
    </form>
  )
}
