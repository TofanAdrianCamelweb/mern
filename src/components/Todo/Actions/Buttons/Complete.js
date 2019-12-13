import React, {Component} from 'react';
import axios from 'axios'

class Complete extends Component {
    render() {
        return (
            <button type="button" onClick={this.completed} className="btn btn-primary">Mark As Completed</button>
        );
    }
    completed= () =>{
        const _id = this.props.itemId;

        axios.post(`http://localhost:4000/todos/update/${_id}`,{todo_completed : true}).then((response)=> this.actions(response) );
    };
    actions(response){
        const message = this.props.message;
        const updateTodo = this.props.updateTodo;
        message(response.data.message);
        updateTodo(response.data.todo);
    }
}

export default Complete;