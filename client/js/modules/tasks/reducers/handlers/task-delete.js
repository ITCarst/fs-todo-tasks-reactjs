export function taskDeleted(state, action) {
    const newState = { ...state };
    const taskId = action.res.replace( /^\D+/g, '');
    let { items } = state;

	newState.items = items.filter(task => parseInt(task.id) !== parseInt(taskId));

    return newState;
}