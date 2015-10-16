import Immutable from 'immutable'
import ActionTypes from 'js/constants/Constants';


let initialState = Immutable.Map({
	loginStatus:false,
	profileId:null
})

export default function authenticationReducer(state=initialState,action){
	switch(action.type){
		case ActionTypes.GET_LOGIN_STATUS:
			return state.set("loginStatus",action.loginStatus)
		case ActionTypes.RECEIVE_PROFILE:
			return state.set("profileId", action.profileId)
		default:
			return state
	}
}