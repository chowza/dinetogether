import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import {Link} from 'react-router'

import {fetchProfileIfNeeded} from 'js/actions/ProfileActions.js'

import ProfileImage from 'js/components/ProfileImage.js'

class MenuContainer extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchProfileIfNeeded(999))
	}

	render(){
		const {profileReducer,menuReducer} = this.props
		let profile = profileReducer.get(999) || profileReducer.get('emptyProfile')
		var id = profile.data.get('id') || 'notAvailable'

		return (
			<div className={menuReducer.get('menuState')}>
				<ProfileImage image={profile.data.get('image')}/>
				<Link to="/">Home</Link>
				<Link to="/contactsTable">Contacts</Link>
				<Link to={`/meals/${id}`}>My Meals</Link>
				<Link to="/settings">Settings</Link>
			</div>
		)
	}
}

MenuContainer.propTypes = {
	menuState: PropTypes.instanceOf(Immutable.Map),
	profileReducer: PropTypes.instanceOf(Immutable.Map),
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
	const {menuReducer,profileReducer} = state;
	return { menuReducer,profileReducer}
}

export default connect(mapStateToProps)(MenuContainer);