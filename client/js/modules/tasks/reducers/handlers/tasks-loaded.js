export function tasksLoaded(state, action) {
    const newState = { ...state };
    const {tasks} = action;

	let nonCompleted = tasks['tasks'].filter(task => !task.completed);

    newState.items = nonCompleted;

    return newState;
}
