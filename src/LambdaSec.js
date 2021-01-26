import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import CircularProgress from '@material-ui/core/CircularProgress';
import { v4 as uuidv4 } from 'uuid';


class LambdaSec extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({task: event.target.value});
    }

    addTask() {
        const body = {
            id: uuidv4(),
            task: this.state.task
        }
        this.props.postTodo(this.props.authToken, body);
        console.log(this.state.task);
    }

    delTask(id) {
        const body = {
            id: id
        }
        console.log(id);
        this.props.delTodo(this.props.authToken, body);
    }

    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding: '50px'}}>
                <Paper style={{width:'50%', padding:'10px'}}>
                    <form style={{display:'flex'}}>
                        <TextField id="standard-basic" label="Task" 
                            style={{flex:'1', marginRight:'20px'}}
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <Button onClick={() => this.addTask()} variant="contained" color="primary">Add Task</Button>
                    </form>
                </Paper>
                <Paper style={{marginTop:'15px', padding:'10px', width:'50%'}}>
                    {this.props.todos ? this.props.todos.map((todo) => 
                        (
                            <Paper key={todo.id} elevation={3} style={{display:'flex', justifyContent:'space-between', padding:'0px 10px', marginBottom:'5px'}}>
                                <p key={todo.id}>{todo.task}</p>
                                <Button onClick={() => this.delTask(todo.id)}>
                                    <CancelIcon />
                                </Button>
                            </Paper>
                        )
                    ) :
                    <Paper>
                        <CircularProgress />
                    </Paper>
                    }
                </Paper>
            </div>
        );
    }
}

export default LambdaSec;
