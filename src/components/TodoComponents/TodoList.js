import React from 'react';
import Todo from './Todo';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoList(props){

    //Styles
    const classes = useStyles();

    console.log(props);

    const todos = props.todos;
    console.log(todos);

    return(
        <div className={classes.root}>
            <List style={{ backgroundColor:'#4d4d4d'}}>
            {todos.map(todo => (
                <Todo
                    key = {todo.id}
                    handleToggleComplete = {props.handleToggleComplete}
                    todo={todo}
                />
               ))}
            </List>
        </div>
    )
}