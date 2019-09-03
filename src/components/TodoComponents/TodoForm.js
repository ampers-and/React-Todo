import React from 'react';

//Material-UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
  }));


export default function TodoForm(props){

    //styles
    const classes = useStyles();


    return(
        <form>
            <TextField
                id="outlined-name"
                label="To Do"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                type='text'
                name ='newTodo'
                placeholder='...todo'
                onChange={props.handleTodoChange}
                style={{ color:'#fff'}}
            />
            <p>
            <Button 
                variant="contained" 
                color="primary"
                onClick={props.handleAddTodo}>
                    Add Todo
                    <AddIcon className={classes.rightIcon} />
            </Button>
            <Button 
                variant="contained" 
                color="primary" 
                className={classes.button} 
                onClick={props.handleClearTodos}>
                    Clear Completed
                    <DeleteIcon className={classes.rightIcon} />
            </Button>
            </p>
        </form>
    )
}