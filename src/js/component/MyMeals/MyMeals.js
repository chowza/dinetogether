import React from 'react'

import Actions from 'actions/Actions.js'
import $ from 'jquery'
import classNames from 'classNames'
import MyMealsStore from 'stores/MyMealsStore.js'

export class MyMeals extends React.Component {

	constructor(){
		super()
		this.state = {details:[]}
	}

	componentDidMount(){
		this._onChange();
		this.loadMyMealsFromServer();
		MyMealsStore.addChangeListener(this._onChange.bind(this))
	}

	componentWillUnmount(){
		MyMealsStore.removeChangeListener(this._onChange.bind(this))
	}

	loadMyMealsFromServer(){
		$.ajax({
			  url: "http://localhost:8001/data/myMeals.json",
			  dataType: 'json',
			  cache: false,
			  success: data => {
				Actions.receiveMyMeals(data)
			  },
			  error: (xhr, status, err) => {
				console.error(status, err.toString());
			  }
		});
	}

	cancelMeal(){
		$.ajax({
			method:"post",
			url: "http://localhost:8001/data/myMeals.json",
			dataType: 'json',
			cache: false,
			success: data => {
				Actions.cancelMeal(data)
			},
			error: (xhr, status, err) => {
				console.error(status, err.toString());
			}
		});
	}

	_onChange(){
		this.setState({
			details: MyMealsStore.getMeals()
		})
	}


	render(){
		
		var myMeals = this.state.details.map(function(detail){
			var confirmed = classNames(
				{'confirmed':detail.confirmStatus},
				{'amChef':detail.chefId == this.props.params.userId}
			)
			return (
				<div key={detail.mealId}>
					<div>{detail.mealName}</div>
					<div>{detail.servingTime}</div>
					<div>{detail.location}</div>
					<div className={confirmed}>{detail.confirmStatus}</div>
					<div onClick={this.cancelMeal}>Cancel</div>
				</div>
			)
		}.bind(this))

		return (
			<div>
				{myMeals}
			</div>
		)
	}
}

module.exports = MyMeals