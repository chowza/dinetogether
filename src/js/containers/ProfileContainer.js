import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import {fetchProfileIfNeeded} from 'js/actions/ProfileActions.js'
import Rating from 'js/components/Rating.js'
import ProfileImage from 'js/components/ProfileImage.js'

class ProfileContainer extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchProfileIfNeeded(this.props.routeParams.userId))
	}


	render(){
		const {profileReducer} = this.props
		const profile = profileReducer.get(this.props.routeParams.userId) || profileReducer.get('emptyProfile')
		const rating = profile.data.get('rating') || 0
		return (
			<div className="profile">
				<ProfileImage image={profile.data.get('image')} id={this.props.routeParams.userId}/>
				<Rating rating={rating}/>
				<div className="bio">{profile.data.get('bio')}</div>
			</div>
		)
	}
}

ProfileContainer.propTypes = {
	profileReducer: PropTypes.instanceOf(Immutable.Map),
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
	const {profileReducer} = state;
	return { profileReducer}
}

export default connect(mapStateToProps)(ProfileContainer);