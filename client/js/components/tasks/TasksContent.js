import React, { Component }   from 'react';
import TaskItem from './TaskItem';
import Button from '../common/Button';
import TaskCreate from './TaskCreate';

import Input from '../common/Input';

export default class TasksContent extends Component {

    constructor(props) {
       super(props);

        this.state = {
            createNew: false
        }
    }

    addNewTask(ev) {
        ev.preventDefault();

        this.setState({
            createNew: true
        });
    }

    handleDescriptionChange(task, value) {
        const { updateTask } = this.props;

        task.description = value;

        setTimeout(() => {
            updateTask(task);
        }, 500);
        
    }

    editTask({task, i}, ev) {
        const task_item = ev.target.closest('.task-item'); 
        const task_descr = task_item.querySelector('.task_descr_holder');

        if (!task_descr.classList.contains('active')) {
            task_item.classList.add('show_descr');
            task_descr.classList.add('active');
        } else {
            task_item.classList.remove('show_descr');
            task_descr.classList.remove('active');
        }
    }

    updateTask(task, ev) {
        const { updateTask } = this.props;
        
        if (ev.type === "click") {
            task.completed = true;
        } else {
            task.title = ev.target.innerHTML;
        }
        updateTask(task);
    }

    deleteTask(task) {
       this.props.deleteTask(task.id);
    }

    closeSidebar() {
        this.setState({
            createNew: false
        });
    }

    renderTasksList(tasks) {
        const tasksList = tasks.map((task, i) => {
            return <TaskItem 
                task={task}
                key={i} 
                editable={true}
                editTask={this.editTask.bind(this, {task, i})}
                updateTask={this.updateTask.bind(this, task)}
                deleteTask={this.deleteTask.bind(this, task)}
                handleDescriptionChange={this.handleDescriptionChange.bind(this, task)}
                showDescr={this.state.showDescr}
                />
        });

        return (
            <div className="main_pane">
                <Button 
                    className="btn-add-task"
                    text="Add Task"
                    onClick={this.addNewTask.bind(this)}
                    />
                <div>
                    {tasksList}
                </div>
            </div>
        );
    }

    render() {
    	const { tasks } = this.props;

        return (
            <div className="content">
            	<div className="tasks-list-holder">

                    {(tasks && tasks.length)
                        ? this.renderTasksList(tasks)
                        : <TaskCreate />
                    }

                    {(this.state.createNew && tasks.length) &&
                        <div className="right_sidebar">
                            <div className="close_icon"
                                onClick={this.closeSidebar.bind(this)}>
                                <span className="icon"></span>
                            </div>
                            <TaskCreate showTitle="false"/>
                        </div>
                    }

                </div>
            </div>
        );
    }
}
