export function taskUpdate(state, action) {
    const newState = { ...state };
	let nonCompleted = newState.items.filter(task => !task.completed);

	newState.items = nonCompleted;

    return newState;
}
