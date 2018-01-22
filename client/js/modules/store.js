import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';

import { tasksSagas, tasksReducers } from './tasks/index';

function composeSagas(sagas) {
    let forks = [];

    for (let key in sagas) forks.push(fork(sagas[key]));

    return function* rootSaga() {
        yield all(forks);
    }
}

const reducer = combineReducers(Object.assign({}, tasksReducers));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const sagas = Object.assign({}, tasksSagas);

export default preloadedState => {
    const store = createStore(reducer, preloadedState, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));
    sagaMiddleware.run(composeSagas(sagas));
    
    return store;
}
