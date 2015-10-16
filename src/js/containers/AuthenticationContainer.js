import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import {initFB,login} from 'js/actions/AuthenticationActions.js'



export class AuthenticationContainer extends Component {

	constructor(props){
		super(props)
	}
	
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(initFB())
	}

	handleClick(){
		const { dispatch } = this.props;
		dispatch(login())
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.authenticationReducer.get('loginStatus') && nextProps.authenticationReducer.get('profileId')){
			this.props.history.pushState({},'/meals/allMeals')
		}
	}


	render(){
		const {authenticationReducer, profileReducer} = this.props
		return (
			<div onClick={this.handleClick.bind(this)}> Login to Facebook </div>
		)
	}
}


AuthenticationContainer.propTypes = {
	profileReducer: PropTypes.instanceOf(Immutable.Map),
	authenticationReducer: PropTypes.instanceOf(Immutable.Map),
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
	const {authenticationReducer, profileReducer} = state;
	return { authenticationReducer, profileReducer}
}

export default connect(mapStateToProps)(AuthenticationContainer);