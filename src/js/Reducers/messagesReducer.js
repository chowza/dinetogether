import Immutable from 'immutable'
import ActionTypes from 'constants/Constants';

let initialState = Immutable.List();

function sortByLastMessage(a,b) { return a.createdAt - b.createdAt }

function messagesReducer(state=initialState,action){
	switch(action.type){
	  	case ActionTypes.CREATE_MESSAGE:
	  		return state.push(action.details)
	  	case ActionTypes.RECEIVE_MESSAGES:
	  		return Immutable.List(action.details.sort(sortByLastMessage))
	    default:
	    	return state
	}
}

module.exports = messagesReducer