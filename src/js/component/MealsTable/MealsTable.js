import React from 'react'
import MealsTableStore from 'stores/MealsTableStore.js'
import MealsTableHeader from 'component/MealsTable/MealsTableHeader/MealsTableHeader.js'
import MealsTableRow from 'component/MealsTable/MealsTableRow/MealsTableRow.js'

import Actions from 'actions/Actions.js'
import $ from 'jquery'

export class MealsTable extends React.Component {

	constructor(){
		super()
		this.state = { details:[]}
	}
	
	componentDidMount(){
		this._onChange();
		this.loadMealsFromServer();
		MealsTableStore.addChangeListener(this._onChange.bind(this))
	}

	componentWillUnmount(){
		MealsTableStore.removeChangeListener(this._onChange.bind(this))
	}
	
	loadMealsFromServer(){
		$.ajax({
			  url: "http://localhost:8001/data/mockData.json",
			  dataType: 'json',
			  cache: false,
			  success: data => {
				Actions.receiveAllMeals(data)
			  },
			  error: (xhr, status, err) => {
				console.error(status, err.toString());
			  }
		});
	}

	_onChange(){
		this.setState({
			details: MealsTableStore.getMeals()
		})
	}

	render(){
		return (
			<div>
				<MealsTableHeader/>
				<MealsTableRow details={this.state.details}/>
			</div>
		)
	}
}

module.exports = MealsTable