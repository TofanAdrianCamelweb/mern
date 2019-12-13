import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";

class Delete extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
                <button type="button" onClick={()=> this.deleteTodo()} className="btn btn-warning">Delete</button>
        );
    }

    deleteTodo = () => {
        const _id = this.props.itemId;
        const message = this.props.message;
        const removeTodos = this.props.removeTodos;
        axios.post(`http://localhost:4000/todos/delete/${_id}`).then((response)=> message(response),removeTodos(_id));
    };
}


export default Delete;