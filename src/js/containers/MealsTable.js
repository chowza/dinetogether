import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import {fetchMealsIfNeeded} from 'js/actions/MealActions.js'
import MealsTableRows from 'js/components/MealsTableRows.js'

export class MealsTable extends Component {

	constructor(props){
		super(props)
	}
	
	componentDidMount(){
		const { dispatch } = this.props;
		console.log("component did mount")
		dispatch(fetchMealsIfNeeded(this.props.routeParams.userId))
	}

	componentWillReceiveProps(nextProps){
		const { dispatch } = this.props;

		console.log("componentWillReceiveProps", this.props.routeParams.userId != nextProps.routeParams.userId)
		if (this.props.routeParams.userId != nextProps.routeParams.userId){
			dispatch(fetchMealsIfNeeded(nextProps.routeParams.userId))
		}
	}

	render(){
		const {mealsReducer} = this.props
		const meals = mealsReducer.get(this.props.routeParams.userId) ? mealsReducer.get(this.props.routeParams.userId).items.toJS() : [];
		return (
			<div>
				<div> Meal Table Header </div>
				<MealsTableRows meals={meals}/>
			</div>
		)
	}
}


MealsTable.propTypes = {
	mealsReducer: PropTypes.instanceOf(Immutable.Map),
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
	const {mealsReducer} = state;
	return { mealsReducer}
}

export default connect(mapStateToProps)(MealsTable);