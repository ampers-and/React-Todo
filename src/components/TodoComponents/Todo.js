import React from 'react';

//Material UI
import ListItemText from '@material-ui/core/ListItemText';

export default function Todo(props){

    console.log(props);
    const todo = props.todo;

    return(
        <div className='todo'
        style={todo.completed ? { color:'#757ce8', textDecoration: 'line-through' } : null}
        onClick = {() => props.handleToggleComplete(todo.id)}>
            <ListItemText style={{ color:'#757ce8'}} primary={todo.task} />
        </div>
    )
}