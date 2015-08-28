import React from 'react'

export class ProfileImage extends React.Component {

	constructor(props){
		super(props)
	}

	render(){

		var profileImage = {backgroundImage: 'url(' + this.props.image + ')'}

		return (
			<div style={profileImage}></div>
		)
	}
}

module.exports = ProfileImage