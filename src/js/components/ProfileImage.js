import React, {Component, PropTypes} from 'react'

export default class ProfileImage extends Component {

	render(){
		let imgUrl = this.props.image || "defaulProfileImage.jpg"
		let profileImage = {backgroundImage: 'url(' + imgUrl + ')'}

		return (
			<div style={profileImage}></div>
		)
	}
}

ProfileImage.propTypes = {
	image: PropTypes.string
}