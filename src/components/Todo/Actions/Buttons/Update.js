import React, {Component} from 'react';
import axios from 'axios';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
                todo_description: '',
                todo_responsible: '',
                todo_priority: '',
        }
    }
    render() {
        const todos= this.props.todos;
        // console.log(todos.todo_priority);
        if (todos.todo_priority === "Medium"){
            console.log(todos.todo_priority);
        }
        return (
            <React.Fragment>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#u"+todos._id} >Update</button>

                <div className="modal fade" id={"u"+todos._id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">edit ID: {todos._id}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.onSubmit} >
                                    <div className={'form-group'}>
                                    <label>Responsible</label>
                                    <input type={"text"} required={'true'} onChange={this.onResponsibleChange} placeholder={todos.todo_responsible} defaultValue={todos.todo_responsible}  />
                                    </div>
                                    <div className={'form-group'}>
                                        <label>Description</label>
                                        <input type={"text"} onChange={this.onDescriptionChange} defaultValue={todos.todo_description} placeholder={todos.todo_description}/>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check form-check-inline">
                                            <input  className="form-check-input"
                                                    type="radio"
                                                    name="priorityOptions"
                                                    id="priorityLow"
                                                    value="Low"
                                                    checked={todos.todo_priority==='Low'}
                                                    onChange={this.onChangeTodoPriority}
                                            />
                                            <label className="form-check-label">Low</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input  className="form-check-input"
                                                    type="radio"
                                                    name="priorityOptions"
                                                    id="priorityMedium"
                                                    value="Medium"
                                                    checked={todos.todo_priority==='Medium'}
                                                    onChange={this.onChangeTodoPriority}

                                            />
                                            <label className="form-check-label">Medium</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input  className="form-check-input"
                                                    type="radio"
                                                    name="priorityOptions"
                                                    id="priorityHigh"
                                                    value="High"
                                                    checked={todos.todo_priority==='High'}
                                                    onChange={this.onChangeTodoPriority}

                                            />
                                            <label className="form-check-label">High</label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }


    onResponsibleChange = e =>{
        this.setState({
            todo_responsible : e.target.value
        });
    };

    onDescriptionChange = e =>{
        this.setState({
            todo_description : e.target.value
        });
    };
    onChangeTodoPriority = e =>{
        this.setState({
            todo_priority: e.target.value
        });
    };

    onSubmit = () =>{
        const message = this.props.message;
        const todos = {
            _id : this.props.todos._id,
            todo_responsible: this.state.todo_responsible,
            todo_description: this.state.todo_description,
            todo_priority: this.state.todo_priority,
            todo_completed: this.props.todos.todo_completed
        };
        axios.post(`http://localhost:4000/todos/update/${this.props.todos._id}`,todos).then((response)=> message(response.data.message));
    }



}

export default Update;