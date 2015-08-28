import React from 'react'
import ProfileImage from 'component/Shared/ProfileImage/ProfileImage.js'
import Rating from 'component/Shared/Rating/Rating.js'
import ProfileStore from 'stores/ProfileStore.js'

import $ from 'jquery'
import Actions from 'actions/Actions.js'

export class Profile extends React.Component {

	constructor(){
		super()
		this.state = {details:[]}
	}
	
	componentDidMount(){
		this._onChange();
		this.loadUserData();
		ProfileStore.addChangeListener(this._onChange.bind(this))
	}
	
	componentWillUnmount(){
		ProfileStore.removeChangeListener(this._onChange.bind(this))
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
			details: ProfileStore.getUserData()
		})
	}
	
	render(){
		return (
			<div className="profile">
				<ProfileImage image={this.state.details.image}/>
				<Rating rating={this.state.details.rating}/>
				<div className="bio">{this.state.details.bio}</div>
			</div>
		)
	}
}

module.exports = Profile