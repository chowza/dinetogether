import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import {createMealPost} from 'js/actions/MealActions.js'

export class CreateMealContainer extends Component {

	constructor(props){
		super(props)
	}

	componentDidMount(){
		console.log("mounting, is fetching? ", this.props.mealsReducer.get('createMeal').isFetching, "isComplete?", this.props.mealsReducer.get('createMeal').isComplete)
	}


	componentWillReceiveProps(nextProps){
		const { authenticationReducer } = this.props;

		if (this.props.mealsReducer.get('createMeal').isFetching
			&& !nextProps.mealsReducer.get('createMeal').isFetching 
			&& !this.props.mealsReducer.get('createMeal').isComplete
			&& nextProps.mealsReducer.get('createMeal').isComplete
			){
			console.log("posting to server now complete, redirecting to my meals...")
			this.props.history.pushState({},`/meals/${authenticationReducer.get('profileId')}`)
		}
	}

	handleSubmit(event){
		event.preventDefault()
		const { dispatch, authenticationReducer } = this.props;

		const params = {
			meal: {
				name: this.refs.name.value,
				servingSize: this.refs.servingSize.value,
				servingTime: this.refs.servingTime.value,
				cuisineType: this.refs.cuisineType.value,
				latitude: this.refs.latitude.value,
				longitude: this.refs.longitude.value,
				userMeals:[{user_id: authenticationReducer.get('profileId')}]
			}
		}

		if (!params.meal.name || !params.meal.servingSize || !params.meal.cuisineType) return

		console.log("posting with ", params)
		dispatch(createMealPost(authenticationReducer.get('profileId'),params))
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" placeholder="Meal Name" ref="name"/>
				<input type="number" placeholder="Serving Size" ref="servingSize"/>
				<input type="number" placeholder="Serving Time" ref="servingTime"/>
				<input type="text" placeholder="Cuisine" ref="cuisineType"/>
				<input type="number" placeholder="Latitude" ref="latitude"/>
				<input type="number" placeholder="Longitude" ref="longitude"/>
				<input type="submit" value="Start Cooking!"/>
			</form>
		)
	}
	
}


function mapStateToProps(state){
	const {mealsReducer, authenticationReducer} = state;
	return {
		mealsReducer,
		authenticationReducer
	}
}


export default connect(mapStateToProps)(CreateMealContainer);