import React, { useState } from 'react'
import TodoForm from './Todoform'
import TodoList from './TodoList'

export default function Todo() {
    const [edit, setEdit]= useState({
        id: null,
        value:''
    })
    return todos.map((todo,index)=>(
        <div className = {todo.isComplete? 'todo-rowcomplete': 'todo-row'}
        key = {index} >

             <div key = {todo.id} onClick = {()=> completeTodo(todo.id)}>
              {todo.text} 
            </div>  

                     <div className = "icons" >

                     </div>
        </div>
    ))
}
