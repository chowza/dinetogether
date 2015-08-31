import Immutable from 'immutable'
import ActionTypes from 'js/constants/Constants';

let initialState = Immutable.Map({
	isFetching:true,
	didInvalidate:false,
	contacts:Immutable.List()
})

function sortByLastMessage(a,b) { return a.updatedAt - b.updatedAt }

export default function contactsReducer(state=initialState,action){
	switch(action.type){
		case ActionTypes.REQUEST_CONTACTS:
			return Immutable.Map({
				isFetching:true,
				didInvalidate:false,
				contacts: state.get('contacts')
			})
		case ActionTypes.RECEIVE_CONTACTS:
			return Immutable.Map({
				isFetching:false,
				didInvalidate:false,
				contacts: Immutable.List(action.details.sort(sortByLastMessage))
			})
		case ActionTypes.INVALIDATE_CONTACTS:
			return state.set(action.requestType,{
				isFetching:false,
				didInvalidate:true,
				contacts: state.get('contacts')
			})
		default:
			return state
	}
}