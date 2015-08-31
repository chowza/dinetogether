import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import {fetchMessagesIfNeeded} from 'js/actions/MessagesActions.js'
import Messages from 'js/components/Messages.js'

export class MessagesTable extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchMessagesIfNeeded(999))
	}


	render(){
		const {messagesReducer} = this.props
		let contact = messagesReducer.get(999) || messagesReducer.get('noMessages')
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