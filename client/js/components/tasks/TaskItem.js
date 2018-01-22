import React from 'react';
import SvgIcon from '../common/SvgIcon';
import Button from '../common/Button';

const TaskItem = ({
	task, 
	editable, 
	editTask, 
	deleteTask, 
	updateTask, 
	handleDescriptionChange, 
	showDescr
}) => (
	<div className="task-item">
		<div className="icon_label" onClick={updateTask}>
			<div>
				<SvgIcon />
			</div>
		</div>
		<div className="task_title" contentEditable={editable} 
			onBlur={updateTask}
			suppressContentEditableWarning="true" >
			{task.title}
		</div>
		<div className="task_date">{task.date}</div>
		<div className="task_edit" onClick={editTask}><span className="icon edit_icon"></span></div>
		<div className="task_delete" onClick={deleteTask}><span className="icon delete_icon"></span></div>
		<div className="task_descr_holder">
			<textarea 
				className="task_descr"
				defaultValue={task.description}
				onBlur={e => handleDescriptionChange(e.target.value, e)} 
			/>
			<small>Using autosave...</small>
		</div>
    </div>
);

export default TaskItem;
