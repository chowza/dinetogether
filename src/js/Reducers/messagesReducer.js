import Immutable from 'immutable'
import ActionTypes from 'js/constants/Constants';;

let initialState = Immutable.Map({
	noMessages:{
		messages:Immutable.List()
	}

})



function sortByLastMessage(a,b) { return a.createdAt - b.createdAt }

export default function messagesReducer(state=initialState,action){
	switch(action.type){
		case ActionTypes.REQUEST_MESSAGES:
			let contact = state.get(action.contactId) || state.get('noMessages')
			return state.set(action.contactId,{
				isFetching:true,
				didInvalidate:false,
				messages: contact.messages
			})
		case ActionTypes.RECEIVE_MESSAGES:
			console.log(action.details)
			return state.set(action.contactId,{
				isFetching:false,
				didInvalidate:false,
				messages: Immutable.List(action.details.messages)
			})
		case ActionTypes.INVALIDATE_MESSAGES:
			return state.set(action.contactId,{
				isFetching:false,
				didInvalidate:true,
				messages: state.get(action.contactId).messages
			})
	  	default:
	    	return state
	}
}
