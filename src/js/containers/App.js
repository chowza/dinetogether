import React, {Component} from 'react'

import { connect } from 'react-redux'

import NavHeader from "js/components/NavHeader"
import Menu from "js/components/Menu"

import {fetchProfileIfNeeded} from 'js/actions/ProfileActions.js'
import {logout} from 'js/actions/AuthenticationActions.js'

class App extends Component {

	componentDidMount(){
		const { dispatch, authenticationReducer } = this.props;
		dispatch(fetchProfileIfNeeded(authenticationReducer.get('profileId')))
	}

	
	componentWillReceiveProps(nextProps){
		if (!nextProps.authenticationReducer.get('loginStatus')){
			this.props.history.pushState({},'/')
		}
	}


	handleClick(){
		const { dispatch } = this.props;
		dispatch(logout())
	}

	render(){
		const {profileReducer,menuReducer, authenticationReducer} = this.props
		var id = authenticationReducer.get('profileId')
		let profile = profileReducer.get(id)
		
		return (
			<div>
				<NavHeader/>
				<Menu menuState={menuReducer.get('menuState')} image={profile.data.get('image')} id={id} handleClick={this.handleClick.bind(this)}/>
				{/* this.props.children are the routes */}
				{React.cloneElement(this.props.children, {profileId: id })}
			</div>
		)
	}
}

function mapStateToProps(state){
	const {menuReducer, profileReducer,authenticationReducer} = state;
	return {menuReducer, profileReducer,authenticationReducer}
}

export default connect(mapStateToProps)(App);