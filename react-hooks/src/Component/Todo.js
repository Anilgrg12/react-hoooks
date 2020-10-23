import React, { useState } from 'react'
// import TodoForm from './Todoform'
import TodoList from './TodoList'

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export default function Todo({todos, completeTodo, removeTodo}) {
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
                         <RiCloseCircleLine onClick = {() => removeTodo(todo.id)} className = "remove-todo" />
                         <TiEdit />

                     </div>
        </div>
    ))
}
