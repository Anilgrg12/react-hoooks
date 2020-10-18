import React, { useState } from 'react'
import TodoForm from './Todoform'
import TodoList from './TodoList'
import Todo from './Todo'

import { RiCloseCircleLine } from 'react-icons/ri'

export default function Todo({todos, completeTodo}) {
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
                         <RiCloseCircleLine />
                         <TiEdit />

                     </div>
        </div>
    ))
}
