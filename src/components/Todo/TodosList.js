import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import TodoItem from "./TodoItem";

class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            message : ""
        };
        this.getTodos();
    }

    getTodos = () => {
        var self = this;
       axios.get("http://localhost:4000/todos").then(function (response) {
            var items= response.data;
           self.setState({
               todos : response.data
           });
        });
    };

    getMessage = (msg) => {
        console.log(msg);
      this.setState({
          message : msg
      })
    };

    removeTodo = (id) =>{
        let remTodos= this.state.todos.filter((item)=> item._id !== id);
        this.setState({
            todos: remTodos
        });
    };

    updateTodo = todo =>{
        let updateTodos =[];
        this.state.todos.map((item,key) =>{
            if (item._id == todo._id){
                updateTodos[key] = todo;
            }
            else {
                updateTodos[key] = item;
            }
        });
        this.setState({
            todos : updateTodos
        })
    };

    render() {
        return (
            <React.Fragment>
            <section>
                {this.state.message ? <div className={"alert alert-success"} role="alert">{this.state.message.data}</div> :null}
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Responsible</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.todos.map((item,index)=> <TodoItem key={item._id}  message={this.getMessage} updateTodo={this.updateTodo} removeTodos={this.removeTodo} todos={item}/>)}
                    </tbody>
                </table>
            </section>
            </React.Fragment>
        );
    }
}

export default TodosList;