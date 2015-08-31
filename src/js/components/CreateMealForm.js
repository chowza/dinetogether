import {Component} from 'react'

export default class CreateMealForm extends Component {

	render(){
		return (
			<form>
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
