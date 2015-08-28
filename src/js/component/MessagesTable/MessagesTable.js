import React from 'react'
import Actions from 'actions/Actions.js'
import MessagesStore from 'stores/MessagesStore.js'
import $ from 'jquery'

export class MessagesTable extends React.Component {
	constructor(){
		super()
		this.state = {details:[]}
	}

	componentDidMount(){
		this._onChange();
		this.getMessagesFromServer();
		MessagesStore.addChangeListener(this._onChange.bind(this))
	}

	componentWillUnmount(){
		MessagesStore.removeChangeListener(this._onChange.bind(this))
	}

	sendMessageToServer(data){
		$.ajax({
			  method:"post",
			  url: "http://localhost:8001/data/messagesData.json",
			  data:data,
			  dataType: 'json',
			  cache: false,
			  success: data => {
				Actions.receiveMessage(data)
			  },
			  error: (xhr, status, err) => {
				console.error(status, err.toString());
			  }
		});
	}

	getMessagesFromServer(){
		$.ajax({
			  url: "http://localhost:8001/data/messagesData.json",
			  dataType: 'json',
			  cache: false,
			  success: data => {
				Actions.receiveMessage(data)
			  },
			  error: (xhr, status, err) => {
				console.error(status, err.toString());
			  }
		});
	}


	_onChange(){
		this.setState({
			details: MessagesStore.getMessages()
		})
	}

	render(){
		var messages = this.state.details.map(function(detail){
			return (
				<div key={detail.id}>
					<div>{detail.sender}</div>
					<div>{detail.content}</div>
				</div>
			)
		})

		return (
			<div>{messages}</div>
		)
	}
}

module.exports = MessagesTable