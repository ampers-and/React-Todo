import React from 'react';

export default function Todo(props){

    console.log(props);
    const todo = props.todo;

    return(
        <div className='todo'
        style={todo.completed ? { textDecoration: 'line-through' } : null}
        onClick = {() => props.handleToggleComplete(todo.id)}>
            {todo.task}
        </div>
    )
}