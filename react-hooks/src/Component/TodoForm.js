import React, { useState } from 'react'

export default function TodoForm() {
    const [input, setInput] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <form>
                <input type = "text" className = "todo-form" placeholder = "Enter todo" value = {input} name = "text" />  
                     <button className = "todo-button"> Add Todo</button>
            </form>
        </div>
    )
}
