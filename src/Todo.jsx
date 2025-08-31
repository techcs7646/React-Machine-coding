import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
const[input, setInput] = useState("");
const[todoList, setTodoList] = useState([]);

const addTodoitem = () => {
 const item = {
  id: Date.now(),
  text: input,
  completed: false
 }
 setTodoList(prev =>[...prev, item]);
 setInput("");

}
const toggleCompleted = (id) =>{
   setTodoList(todoList.map((t) =>{
     if(t.id === id){
      return{
        ...t,
        completed:!t.completed
      }
     }else{
      return t;
     }
   }))
}
const deleteTodo = (id) =>{
  setTodoList(todoList.filter((t)=>(t.id!==id)))
}
  return (
    <div>
      <input type="text" placeholder='Enter your todo' 
      value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodoitem}>Add Todo</button>
      <ul>
        {todoList.map((item =><li key={item.id}>
          <input type="checkbox" 
          checked ={item.completed} onChange={() =>toggleCompleted(item.id)}/>
          <span className={item.completed ? 'strike':''}>{item.text}</span>
          <button onClick={()=>deleteTodo(item.id)}>Delete</button>
        </li>))}
      </ul>
    </div>
  )
}

export default Todo