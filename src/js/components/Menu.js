import React, {Component} from 'react'
import {Link} from 'react-router'

import ProfileImage from 'js/components/ProfileImage.js'


export default class Menu extends Component {
	constructor(props){
		super(props)
	}

	render(){

		return (
			<div>
				<ProfileImage image={this.props.image} id={this.props.id}/>
				<Link to="/meals/allMeals">Home</Link>
				<Link to="/contactsTable">Contacts</Link>
				<Link to={`/meals/${this.props.id}`}>My Meals</Link>
				<Link to="/settings">Settings</Link>
				<div onClick={this.props.handleClick}> Logout </div>
			</div>
		)
	}
}
