import React, {Component} from 'react';
import Actions from "./Actions/Actions";

class TodoItem extends Component {
    constructor(props) {
        super(props);
       this.render= this.render.bind(this);
    }

    render() {
        const {_id,todo_description,todo_responsible,todo_priority,todo_completed} = this.props.todos;
        const message = this.props.message;
        const removeTodos = this.props.removeTodos;
        const updateTodo = this.props.updateTodo;
        return (
            <tr>
                <td>{todo_responsible}</td>
                <td>{todo_description}</td>
                <td>{todo_priority}</td>
                {todo_completed ? <td>Completed</td> : <td>Not Complete</td>}
                <td><Actions itemId={_id} removeTodos={removeTodos} updateTodo={updateTodo} todos={this.props.todos} message={message} /></td>
            </tr>
        );
    }
}

export default TodoItem;