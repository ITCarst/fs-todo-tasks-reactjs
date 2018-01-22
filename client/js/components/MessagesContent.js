import React, { Component }   from 'react';
import { bindActionCreators, store } from 'redux';
import { connect }            from 'react-redux';
import * as tasksActions from '../modules/tasks/tasks.actions.creators';

const errorStyle = {
  color: 'red',
  marginTop: "20px"
};

const sentStyle = {
  color: 'green',
  marginTop: "20px"
}

class MessagesContent extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	recipients: '',
	    	originator: '',
	    	body: ''
	    };

	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.sendMessage = this.sendMessage.bind(this);
	}

	handleInputChange(e) {
		const {target: {value, name}} = e;

	    this.setState({
	      	[name]: value
	    });
	}	
	
	sendMessage(e) {
	    e.preventDefault();

	    const {recipients, originator, body } = this.state;
	    if (!recipients || !originator || !body) return false;

	    this.props.sendMS({recipients, originator, body});

	    this.setState({
	    	recipients: '',
	    	originator: '',
	    	body: ''
	    })
	}

    render() {
        return (
            <div className="content">
	            <div className="todo-send">
	              	<input
		            	type="text"
		            	name="recipients"
                       	className="todo_recipient"
		            	placeholder="Recipient:"
		            	value={this.state.recipients}
		            	onChange={this.handleInputChange} 
	            	/>
		          	<input
		            	type="text"
		            	name="originator"
	                    className="todo_originator"   
                       	placeholder="Originator:"
		            	value={this.state.originator}
		            	onChange={this.handleInputChange} 
	            	/>
	                <textarea 
                		name="body"
                		placeholder="Message" 
                       	value={this.state.body}
                		onChange={this.handleInputChange}  
                    />
	                <button onClick={this.sendMessage}>Send SMS</button>

                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ state }),
    dispatch => bindActionCreators(tasksActions, dispatch)
)(MessagesContent);

export { MessagesContent }
