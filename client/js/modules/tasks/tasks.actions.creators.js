import * as ActionConstants from './tasks.actions.constants';

//load tasks
export function loadTasks() {
    return { type: ActionConstants.LOAD_TASKS };
}

export function tasksLoaded(tasks) {
    return { type: ActionConstants.TASKS_LOADED, tasks };
}

export function tasksLoadedFailed(err) {
    return { type: ActionConstants.TASKS_LOAD_FAILED, err };
}

//load task
export function loadTask(task) {
    return { type: ActionConstants.LOAD_TASK, task };
}

export function taskLoaded(res) {
    return { type: ActionConstants.TASK_LOADED, res };
}

export function taskLoadedFailed(err) {
    return { type: ActionConstants.TASK_LOAD_FAILED, err };
}

//update task
export function updateTask(task) {
    return { type: ActionConstants.UPDATE_TASK, task };
}

export function taskUpdated(res) {
    return { type: ActionConstants.TASK_UPDATED, res };
}

export function taskUpdateFailed(err) {
    return { type: ActionConstants.TASK_UPDATED_FAILED, err };
}

//create task
export function createTask(task) {
    return { type: ActionConstants.CREATE_TASK, task };
}

export function taskCreated(res) {
    return { type: ActionConstants.TASK_CREATED, res };
}

export function taskCreateFailed(err) {
    return { type: ActionConstants.TASK_CREATE_FAILED, err };
}

//delete task
export function deleteTask(id) {
    return { type: ActionConstants.DELETE_TASK, id };
}

export function taskDeleted(res) {
    return { type: ActionConstants.TASK_DELETED, res };
}

export function taskDeleteFailed(err) {
    return { type: ActionConstants.TASK_DELETE_FAILED, err };
}
