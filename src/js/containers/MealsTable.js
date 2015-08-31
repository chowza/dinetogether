import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import {fetchMealsIfNeeded} from 'js/actions/MealActions.js'
import MealsTableRows from 'js/components/MealsTableRows.js'

export class MealsTable extends Component {

	constructor(props){
		super(props)
		console.log(this.props)
	}
	
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchMealsIfNeeded('allMeals'))
	}

	render(){
		const {mealsReducer} = this.props
		return (
			<div>
				<div> Meal Table Header </div>
				<MealsTableRows meals={mealsReducer.get('allMeals').items.toJS()}/>
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