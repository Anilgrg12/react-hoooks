import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }


    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos)
};

const updateTodo = (todoId, newValue) => {
    if(!newValue.text|| /^\s*$/.test(newValue.text)){
        return;
    }
    setTodos(prev =>prev.map(item => (item.id === todoId ? newValue : item)))
}
    return (
        <div>
            <h1>Things to be done </h1>
            <TodoForm onSubmit = {addTodo} /> 
            <Todo todos = {todos} />

        </div>
    )
}
