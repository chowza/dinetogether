import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router';

import ProfileImage from 'js/components/ProfileImage'
import Rating from 'js/components/Rating'
import JoinButton from 'js/components/JoinButton'
import Meal from 'js/components/Meal'

export default class MealsTableRows extends Component {

	render(){

		var rows = this.props.meals.map(function(meal){
			// <Link to="profile" params={{userId:meal.user.id}} className="profile">
			// 			<ProfileImage image={meal.user.image}/>
			// 			<Rating rating={meal.user.rating}/>
			// 		</Link>
			return (
				<div key={meal.id}>
					<Meal meal={meal.meal}/>
					<JoinButton joinStatus={meal.joinStatus}/>
				</div>
			)
		})

		return (
			<div>
				{rows}
			</div>
		)
	}
}

MealsTableRows.propTypes = {
	meals: PropTypes.array.isRequired
}