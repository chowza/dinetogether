import React from 'react'

import Actions from 'actions/Actions.js'
import $ from 'jquery'

export class CreateMeal extends React.Component {

	createMeal(){
		$.ajax({
			method:"post",
			url: "http://localhost:8001/data/mockData.json",
			dataType: 'json',
			cache: false,
			success: data => {
				Actions.createMeal(data)
			},
			error: (xhr, status, err) => {
				console.error(status, err.toString());
			}
		});
	}

	render(){
		return (
			<form onSubmit={this.createMeal}>
				<input type="text" placeholder="Meal Name"/>
				<input type="number" placeholder="Serving Size"/>
				<input type="number" placeholder="Serving Time"/>
				<input type="number" placeholder="Location"/>
				<input type="number" placeholder="Ingredients"/>
				<input type="text" placeholder="Cuisine"/>
				<input type="submit" value="Start Cooking!"/>
			</form>
		)
	}
}

module.exports = CreateMeal