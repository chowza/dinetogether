import Immutable from 'immutable'
import ActionTypes from 'constants/Constants';

let initialState = Immutable.Map({
	allMeals: Immutable.List(),
	myMeals: Immutable.List(),
});

function sortByDistance(a,b) { return a.distance - b.distance }

function mealsReducer(state=initialState,action){
	switch(action.type){
		case ActionTypes.RECEIVE_ALL_MEALS:
			return state.set('allMeals',Immutable.List(action.details.sort(sortByDistance)))
		case ActionTypes.RECEIVE_MY_MEALS:
			return state.set('myMeals',Immutable.List(action.details))
		case ActionTypes.JOIN_MEAL:
			return state.set('myMeals', state.get('myMeals').push(action.details))
		case ActionTypes.CREATE_MEAL:
			return state.set('myMeals', state.get('myMeals').push(action.details)).set('allMeals', state.get('allMeals').push(action.details).sort(sortByDistance))
		case ActionTypes.CANCEL_MEAL:
			return state.set('myMeals', state.get('myMeals').delete(action.index))
  		default:
			return state
	}
}

module.exports = mealsReducer