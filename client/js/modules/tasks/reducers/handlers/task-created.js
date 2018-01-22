export function taskCreated(state, action) {
    const newState = { ...state };
    const { task } = action.res;
 	const taskId = action.res.res.replace( /^\D+/g, '');
   	task.id = taskId;
   	task.completed = false;

    newState.items.push(task);

    return newState;
}