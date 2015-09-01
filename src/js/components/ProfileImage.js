import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

export default class ProfileImage extends Component {

	render(){
		let imgUrl = this.props.image || "defaulProfileImage.jpg"
		let profileImage = {backgroundImage: 'url(' + imgUrl + ')'}

		return (
			<Link to={`/profile/${this.props.id}`} style={profileImage}>My Profile Image</Link>
		)
	}
}

ProfileImage.propTypes = {
	image: PropTypes.string
}