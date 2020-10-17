import React, { useState } from 'react'

export default function TodoForm(props) {
    const [input, setInput] = useState("")

   const handleChange = e =>{
       setInput(e.target.value);
   }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()* 10000),
            text: input

        });

    setInput('');
    };


    return (
        <div>
            <form className = "todo-form" onSubmit = {handleSubmit} >
                <input type = "text" onChange = {handleChange} className = "todo-input" placeholder = "Enter todo" value = {input} name = "text" />  
                     <button className = "todo-button"> Add Todo</button>
            </form>
        </div>
    )
}
