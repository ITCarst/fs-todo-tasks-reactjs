import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services';

import * as tasksActions from './tasks.actions.creators';
import * as ActionConstants from './tasks.actions.constants';

//all
export function* watchTasksLoad() {
    yield takeLatest(ActionConstants.LOAD_TASKS, handleTasksLoad);
}
function* handleTasksLoad(action) {
    try {
        let tasks = yield call(api.getTasks);
        if (tasks && (tasks instanceof Error)) yield put(tasksActions.tasksLoadedFailed(e.message));

        yield put(tasksActions.tasksLoaded(tasks));
    } catch (e) {
        yield put(tasksActions.tasksLoadedFailed(e.message));
    }
}

//one
export function* watchTaskLoad() {
    yield takeLatest(ActionConstants.LOAD_TASK, handleTaskLoad);
}
function* handleTaskLoad(action) {
    try {
        let task = yield call(api.getTask);
        if (task && (task instanceof Error)) yield put(tasksActions.taskLoadedFailed(e.message));

        yield put(tasksActions.taskLoaded(task));
    } catch (e) {
        yield put(tasksActions.taskLoadedFailed(e.message));
    }
}

//update
export function* watchTaskUpdate() {
    yield takeLatest(ActionConstants.UPDATE_TASK, handleTaskUpdate);
}
function* handleTaskUpdate(action) {
    try {
        const task = yield call(api.updateTask, action.task);
        if (task && (task instanceof Error)) yield put(tasksActions.taskUpdateFailed(e.message));

        yield put(tasksActions.taskUpdated(task));
    } catch (e) {
        yield put(tasksActions.taskUpdateFailed(e.message));
    }
}

//create
export function* watchTaskCreate() {
    yield takeLatest(ActionConstants.CREATE_TASK, handleTaskCreate);
}
function* handleTaskCreate(action) {
    try {
        const task = yield call(api.createTask, action.task);
        if (task && (task instanceof Error)) yield put(tasksActions.taskCreateFailed(e.message));

        yield put(tasksActions.taskCreated(task));
    } catch (e) {
        yield put(tasksActions.taskCreateFailed(e.message));
    }
}

//delete
export function* watchTaskDelete() {
    yield takeLatest(ActionConstants.DELETE_TASK, handleTaskDelete);
}
function* handleTaskDelete(action) {
    try {
        const task = yield call(api.deleteTask, action.id);
        if (task && (task instanceof Error)) yield put(tasksActions.taskDeleteFailed(e.message));

        yield put(tasksActions.taskDeleted(task));
    } catch (e) {
        yield put(tasksActions.taskDeleteFailed(e.message));
    }
}
