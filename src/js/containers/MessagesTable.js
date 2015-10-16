import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import {fetchMessagesIfNeeded,fetchMessages} from 'js/actions/MessagesActions.js'
import Messages from 'js/components/Messages.js'

class MessagesTable extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		console.log("mounting messages")
		const { dispatch } = this.props;
		dispatch(fetchMessagesIfNeeded(this.props.profileId,this.props.routeParams.chatId))
	}
	
	render(){
		const {messagesReducer} = this.props
		let contact = messagesReducer.get(this.props.routeParams.chatId) || messagesReducer.get('noMessages')
		return <Messages messages={contact.messages.toJS()} />
	}
}

MessagesTable.propTypes = {
	messagesReducer: PropTypes.instanceOf(Immutable.Map),
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
	const {messagesReducer} = state;
	return { messagesReducer}
}

export default connect(mapStateToProps)(MessagesTable);