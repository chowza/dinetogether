import React from 'react'

export class Meal extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="meal">
				<div className="mealImage">{this.props.meal.image}</div>
				<div className="mealName">{this.props.meal.mealName}</div>
				<div className="servingSize">{this.props.meal.servingSize}</div>
				<div className="servingTime">{this.props.meal.servingTime}</div>
				<div className="location">{this.props.meal.location}</div>
				<div className="cuisineType">{this.props.meal.cuisineType}</div>
				<div className="ingredients">{this.props.meal.ingredients}</div>
				<div className="recommendedDonation">{this.props.meal.recommendedDonation}</div>
			</div>
		)
	}
}


module.exports = Meal