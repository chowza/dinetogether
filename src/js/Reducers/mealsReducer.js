import Immutable from 'immutable'
import ActionTypes from 'js/constants/Constants';;

let initialState = Immutable.Map({
	allMeals: {
		isFetching:false,
		didInvalidate:false,
		items: Immutable.List(),
	},
	myMeals: {
		isFetching:false,
		didInvalidate:false,
		items: Immutable.List()
	},
	createMeal:{
		isFetching:false,
		isComplete: false
	}
});

function sortByDistance(a,b) { return a.distance - b.distance }

export default function mealsReducer(state=initialState,action){
	switch(action.type){
		case ActionTypes.REQUEST_MEALS:

			var items = state.get(action.requestType) ? state.get(action.requestType).items : Immutable.List();
			return state.set(action.requestType,{
				isFetching:true,
				didInvalidate:false,
				items: items
			})

		case ActionTypes.INVALIDATE_MEALS:
			return state.set(action.requestType,{
				isFetching:false,
				didInvalidate:true,
				items:state.get(action.requestType).items
			})
		case ActionTypes.RECEIVE_MEALS:
			return state.set(action.requestType,{
				isFetching:false,
				didInvalidate:false,
				items:Immutable.List(action.details.sort(sortByDistance))
			})
		case ActionTypes.JOIN_MEAL:
			return state.set(action.requestType,{
				isFetching:false,
				didInvalidate:false,
				items:state.get(action.requestType).items.push(action.details)
			})
		case ActionTypes.CREATE_MEAL_SUCCESS:
			return Immutable.Map({
				allMeals:{
					isFetching:false,
					didInvalidate:false,
					items:state.get('allMeals').items.push(action.details)
				},
				myMeals:{
					isFetching:false,
					didInvalidate:false,
					items:state.get('myMeals').items.push(action.details)
				},
				createMeal: {
					isFetching: false,
					isComplete: true
				}
			})
		case ActionTypes.CREATE_MEAL_POST:
			return state.set('createMeal',{
				isFetching:true,
				isComplete:false
			})

		case ActionTypes.CANCEL_MEAL:
			return state.set('myMeals',{
				isFetching:false,
				didInvalidate:false,
				items:state.get('myMeals').items.delete(action.index)
			})
  		default:
			return state
	}
}