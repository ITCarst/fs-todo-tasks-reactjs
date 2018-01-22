import React, { Component }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as tasksActions from '../../modules/tasks/tasks.actions.creators';

import SvgIcon from '../common/SvgIcon';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import Button from '../common/Button';

class TaskCreate extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	title: '',
	    	description: ''
	    };

	    this.handleTitleChange = this.handleTitleChange.bind(this);
	    this.handleDescrChange = this.handleDescrChange.bind(this);
  	}

    createTask(ev) {
    	ev.preventDefault();

    	const {createTask} = this.props;
    	const {title, description} = this.state;

    	createTask({title, description});
    }
    
    handleTitleChange(val) {
    	this.setState({title: val});
  	}
  	
  	handleDescrChange(val) {
  		this.setState({description: val});
  	}
  	
	render() {
		const {showTitle} = this.props;

		return (
			<div className="task_create">
				{!showTitle&&
					<div className="add-task-title">No existing Tasks, add a new one:</div>
				}
				<div className="title_holder">
				    <div className="title_label">
				        <SvgIcon />
				    </div>
				    <Input
				        type={"text"}
				        name={"title"}
				        placeholder="Write a task name"
				        className={"title"} 
				        onChange={this.handleTitleChange}
			        />
				</div>
				<TextArea
				    placeholder='Description'
				    classname={"description"} 
				    onChange={this.handleDescrChange}/>
				<Button 
				    className="btn-add-task"
				    text="Add Task"
				    onClick={this.createTask.bind(this)}
				    />	
			</div>
		);
	};
}

export default connect(state => ({ state}),
    dispatch => bindActionCreators(tasksActions, dispatch))
(TaskCreate);
