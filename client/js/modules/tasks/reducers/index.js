import * as ActionConstants from '../tasks.actions.constants';
import * as handlers from './handlers/index'

export function tasks(state = {}, action) {

    switch(action.type) {
        //all
        case ActionConstants.TASKS_LOADED:
            return handlers.tasksLoaded(state, action);
        //one
        case ActionConstants.TASK_LOADED:
           return handlers.taskLoaded(state, action);
        //update
        case ActionConstants.TASK_UPDATED:
            return handlers.taskUpdate(state, action);
        //create
        case ActionConstants.TASK_CREATED:
            return handlers.taskCreated(state, action);
        //delete
        case ActionConstants.TASK_DELETED:
            return handlers.taskDeleted(state, action);
        case ActionConstants.TASKS_LOAD_FAILED:
        case ActionConstants.TASK_LOAD_FAILED:
        case ActionConstants.TASK_UPDATED_FAILED:
        case ActionConstants.TASK_CREATE_FAILED:
        case ActionConstants.TASK_DELETE_FAILED:
            return {
                ...state,
                tasksError: action.error
            };
        default:
            return state;
    }
}
