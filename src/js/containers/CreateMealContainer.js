import {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import {createMeal} from 'js/actions/Actions.js'
import CreateMealForm from 'js/components/CreateMealForm.js'

export class CreateMealContainer extends Component {

	constructor(props){
		super(props)
	}

	render(){
		return <CreateMealForm/>
	}
}

CreateMealContainer.propTypes = {
	mealsReducer: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
	const {mealsReducer} = state;
	return {
		mealsReducer
	}
}


export default connect(mapStateToProps)(CreateMealContainer);