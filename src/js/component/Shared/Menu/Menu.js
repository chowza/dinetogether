import React from 'react'
import {Link} from 'react-router'
import ProfileImage from 'component/Shared/ProfileImage/ProfileImage.js'
import MenuStore from 'stores/MenuStore.js'
import $ from 'jquery'
import Actions from 'actions/Actions.js'

export class Menu extends React.Component {
	constructor(){
		super();
		this.state = {opened:false,details:{}}
	}

	componentDidMount(){
		this._onChange();
		this.loadUserData();
		MenuStore.addChangeListener(this._onChange.bind(this))
	}

	componentWillUnmount(){
		MenuStore.removeChangeListener(this._onChange.bind(this))
	}

	loadUserData(){
		$.ajax({
			  url: "http://localhost:8001/data/userData.json",
			  dataType: 'json',
			  cache: false,
			  success: data => {
				Actions.receiveUserData(data)
			  },
			  error: (xhr, status, err) => {
				console.error(status, err.toString());
			  }
		});
	}

	_onChange(){
		this.setState({
			opened: MenuStore.getMenuState(),
			details: MenuStore.getUserData()
		})
	}

	render(){
		return (
			<div className={this.state.opened}>
				<ProfileImage image={this.state.details.image}/>
				<Link to="app">Home</Link>
				<Link to="myMeals" params={{userId:1}}>My Meals</Link>
				<Link to="contactsTable">Contacts</Link>
				<Link to="settings">Settings</Link>
			</div>
		)
	}
}

module.exports = Menu