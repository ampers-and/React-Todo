import React from 'react';
import Todo from './Todo';

export default function TodoList(props){
    
    console.log(props);

    const todos = props.todos;
    console.log(todos);

    return(
        <div className='TodoList'>
            {todos.map(todo => (
                <Todo
                    key = {todo.id}
                    toggleComplete = {props.toggleComplete}
                    todo={todo}
                />
               ))}
        </div>
    )
}