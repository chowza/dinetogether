import React, {Component} from 'react'


export default class Contacts extends Component {

	constructor(props){
		super(props)
	}

	render(){
		var messages = this.props.messages.map(function(message){
			return (
				<div key={message.id}>
					<div>{message.sender}</div>
					<div>{message.content}</div>
				</div>
			)
		})

		return (
			<div>{messages}</div>
		)
	}
	
}