import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router';

export default class Contacts extends Component {

	constructor(props){
		super(props)
	}

	render(){

		//<Link to="messagesTable" params={{chatId:contact.id}} key={contact.id}>{contact.name}</Link>
		var contacts = this.props.contacts.map(function(contact){
			return <div to="messagesTable" params={{chatId:contact.id}} key={contact.id}>{contact.name}</div>
		})

		return (
			<div>
				{contacts}
			</div>
		)
	}
}