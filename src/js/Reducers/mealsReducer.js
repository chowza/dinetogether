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
	}
});

function sortByDistance(a,b) { return a.distance - b.distance }

export default function mealsReducer(state=initialState,action){
	switch(action.type){
		case ActionTypes.REQUEST_MEALS:
			return state.set(action.requestType,{
				isFetching:true,
				didInvalidate:false,
				items:state.get(action.requestType).items
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
		case ActionTypes.CREATE_MEAL:
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
				}
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