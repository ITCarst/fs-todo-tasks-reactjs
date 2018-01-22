import React, { Component }   	from 'react';
import { bindActionCreators } 	from 'redux';
import { connect }            	from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import * as tasksActions from '../modules/tasks/tasks.actions.creators';

import Tasks from './Tasks';
import Footer from './Footer';

class App extends Component {
    
    componentDidMount() {
        const { state: { tasks: {tasksItems} }} = this.props;
        this.props.loadTasks();
    }

    render() {
        return (
        	<Router>
                <div className="app-root">
                    <div className="content-wrapper">
                        <Route exact path="/" component={Tasks} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default connect(state => ({ state}),
    dispatch => bindActionCreators({...tasksActions }, dispatch))
(App);
