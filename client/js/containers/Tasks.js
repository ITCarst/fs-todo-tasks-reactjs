import React, { Component }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as tasksActions from '../modules/tasks/tasks.actions.creators';

import TasksContent from '../components/tasks/TasksContent';

class Tasks extends Component {

    render() {
    	const {deleteTask, createTask, updateTask} = this.props;

        return (
            <div className="dashboard">
			    <TasksContent 
			    	tasks={this.props.state.tasks.items}
			    	createTask={createTask}
			    	deleteTask={deleteTask}
			    	updateTask={updateTask}/>
            </div>
        );
    }
}

export default connect(state => ({ state}),
    dispatch => bindActionCreators(tasksActions, dispatch))
(Tasks);
