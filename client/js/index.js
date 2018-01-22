import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './modules/store';
import App from './containers/App';

function init() {
    render(
        <Provider store={createStore()}>
            <App />
        </Provider>,
        document.getElementById('main')
    );
}

function initAppFail(err) {
    render(
        <div className="app-main">
            Error
        </div>,
        document.getElementById('main')
    );
}

window.initApp = async function initApp() {
    init();
}
