import React from 'react';
import { Trash, Plus } from 'lucide-react'; // Importation de l'icône Trash

class Todo_App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Tasks: [],
            task: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    componentDidMount() {
        const savedTasks = JSON.parse(localStorage.getItem('Tasks')) || [];
        this.setState({ Tasks: savedTasks });
    }

    handleChange(e) {
        this.setState({ task: e.target.value });
    }

    handleAdd() {
        const newTask = this.state.task.trim();
        if (newTask === "") return;

        this.setState(
            (prevState) => ({
                Tasks: [...prevState.Tasks, newTask],
                task: ""
            }),
            () => {
                localStorage.setItem('Tasks', JSON.stringify(this.state.Tasks));
            }
        );
    }

    removeTask(item) {
        this.setState(
            (prevState) => ({
                Tasks: prevState.Tasks.filter((T) => T !== item)
            }),
            () => {
                localStorage.setItem('Tasks', JSON.stringify(this.state.Tasks));
            }
        );
    }

    render() {
        return (
            <div className="container m-3 p-3 text-center">
                <h1 className="m-3">Todo List</h1>
                <div className="m-3 p-3 d-flex justify-content-around">
                    <input
                        type="text"
                        placeholder="New task..."
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button
                        className="btn btn-warning mx-3"
                        onClick={this.handleAdd}
                    >
                        <Plus size={18} />
                    </button>
                </div>
                <div className="m-3 p-2">
                    <ul>
                        {this.state.Tasks.map((item, index) => (
                            <div key={index} className="d-flex justify-content-around">
                                <li className="border border-dark m-2 p-2 bg-warning d-flex justify-content-between align-items-center">
                                    {item}
                                    <button
                                        className="btn btn-danger mx-2 d-flex align-items-center"
                                        onClick={() => this.removeTask(item)}
                                    >
                                        <Trash size={18} /> 
                                    </button>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todo_App;
