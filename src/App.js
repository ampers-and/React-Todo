import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles( theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {

      todos:[
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],

      newTodo:''

    };
  }

  addTodo = e => {
    e.preventDefault();
    const nTodo = { task: this.state.newTodo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, nTodo], 
      newTodo: '' 
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos;
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      } 
        return todo;
    });
    this.setState({ todos });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };


  render() {
    return (
      <Container maxWidth="sm">
        <Card className={useStyles.card} style={{ backgroundColor:'#4d4d4d'}}>
          <CardContent>
          <Typography variant="h5" component="h3" style={{ color:'#fff'}}>
            Welcome to your Todo App!
          </Typography>
          <TodoList
            handleToggleComplete={this.toggleTodoComplete}
            todos={this.state.todos}
          />
          <TodoForm
            value={this.state.newTodo}
            handleTodoChange={this.changeTodo}
            handleAddTodo={this.addTodo}
            handleClearTodos={this.clearCompletedTodos}
          />
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default App;
