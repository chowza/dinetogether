import Immutable from 'immutable'
import ActionTypes from 'js/constants/Constants';;


let initialState = Immutable.Map({
	emptyProfile:{
		data:Immutable.Map()
	}
});

export default function profileReducer(state=initialState,action){
	switch(action.type){
		case ActionTypes.REQUEST_PROFILE:
			let profile = state.get(action.profileId) || state.get('emptyProfile')
			return state.set(action.profileId,{
				isFetching:true,
				didInvalidate:false,
				data: profile.data
			})
		case ActionTypes.INVALIDATE_PROFILE:
			return state.set(action.profileId,{
				isFetching:false,
				didInvalidate:false,
				data: state.get(action.profileId).data
			})
		case ActionTypes.RECEIVE_PROFILE:
			return state.set(action.profileId,{
				isFetching:false,
				didInvalidate:false,
				data: Immutable.Map(action.details)
			})
		default:
			return state
	}
}