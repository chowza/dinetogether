import React from 'react'
import {Link} from 'react-router';

var ProfileImage = require('component/Shared/ProfileImage/ProfileImage.js')
var Rating = require('component/Shared/Rating/Rating.js')
var JoinButton = require('component/Shared/JoinButton/JoinButton.js')
var Meal = require('component/MealsTable/MealsTableRow/Meal/Meal.js')


export class MealsTableRow extends React.Component {

	render(){
		var mealList = this.props.details.map(function(detail){


			return (
				<div key={detail.id}>
					<Meal meal={detail.meal}/>
					<Link to="profile" params={{userId:detail.user.id}} className="profile">
						<ProfileImage image={detail.user.image}/>
						<Rating rating={detail.user.rating}/>
					</Link>
					<JoinButton joinStatus={detail.joinStatus}/>
				</div>
			)
		})

		return (
			<div>
				{mealList}
			</div>
		)
	}
}

module.exports = MealsTableRow