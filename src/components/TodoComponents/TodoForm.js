import React from 'react';

export default function TodoForm(props){

    return(
        <form>
            <input
                type='text'
                name ='newTodo'
                placeholder='...todo'
                onChange={props.handleTodoChange}
            />
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    )
}