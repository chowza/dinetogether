import React from 'react'
import {Link} from 'react-router';

import Actions from 'actions/Actions.js'
import $ from 'jquery'

import ContactsStore from 'stores/ContactsStore.js'

export class ContactsTable extends React.Component {

	constructor(){
		super()
		this.state = {details:[]}
	}

	componentDidMount(){
		this._onChange();
		this.loadContactsFromServer();
		ContactsStore.addChangeListener(this._onChange.bind(this))
	}

	componentWillUnmount(){
		ContactsStore.removeChangeListener(this._onChange.bind(this))
	}

	loadContactsFromServer(){
		$.ajax({
			  url: "http://localhost:8001/data/contactsData.json",
			  dataType: 'json',
			  cache: false,
			  success: data => {
				Actions.receiveContacts(data)
			  },
			  error: (xhr, status, err) => {
				console.error(status, err.toString());
			  }
		});
	}

	_onChange(){
		this.setState({
			details: ContactsStore.getContacts()
		})
	}

	render(){

		var contacts = this.state.details.map(function(detail){
			return <Link to="messagesTable" params={{chatId:detail.id}} key={detail.id}>{detail.name}</Link>
		})

		return (
			<div>
				{contacts}
			</div>
		)
	}
}

module.exports = ContactsTable