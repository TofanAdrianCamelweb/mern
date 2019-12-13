import React, {Component} from 'react';
import Complete from "./Buttons/Complete";
import Delete from "./Buttons/Delete";
import Update from "./Buttons/Update";
import './actions.scss'
class Actions extends Component {
    render() {
        const _id = this.props.itemId;
        const message = this.props.message;
        const removeTodos = this.props.removeTodos;
        const updateTodo = this.props.updateTodo;
        return (
            <React.Fragment>
            <Complete message={message}  updateTodo={updateTodo} removeTodos={removeTodos} itemId={_id} />
            <Delete message={message} removeTodos={removeTodos} itemId={_id}  />
            <Update message={message} todos={this.props.todos} updateTodo={updateTodo} removeTodos={removeTodos} itemId={_id}  />
            </React.Fragment>
        );
    }
}

export default Actions;