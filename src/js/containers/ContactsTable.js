import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import {fetchContactsIfNeeded} from 'js/actions/ContactsActions.js'
import Contacts from 'js/components/Contacts.js'

export class ContactsTable extends Component {

	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchContactsIfNeeded())
	}

	render(){
		
		const {contactsReducer } = this.props;
		return <Contacts contacts={contactsReducer.get('contacts').toJS()}/>
	}
}

ContactsTable.propTypes = {
	contactsReducer: PropTypes.instanceOf(Immutable.Map),
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
	const {contactsReducer} = state;
	return { contactsReducer }
}


export default connect(mapStateToProps)(ContactsTable);