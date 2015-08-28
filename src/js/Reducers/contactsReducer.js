import Immutable from 'immutable'
import ActionTypes from 'constants/Constants';

let initialState = Immutable.List();

function sortByLastMessage(a,b) { return a.updatedAt - b.updatedAt }

function contactsReducer(state=initialState,action){
	switch(action.type){
		case ActionTypes.RECEIVE_CONTACTS:
			return Immutable.List(action.details.sort(sortByLastMessage))
		default:
			return state
	}
}

module.exports = contactsReducer