import Immutable from 'immutable'
import ActionTypes from 'constants/Constants';


let initialState = Immutable.Map({
	myData = Immutable.Map(),
	userData = Immutable.Map()
});

function profileReducer(state=initialState,action){
	switch(action.type){
		case ActionTypes.RECEIVE_USER_DATA:
			return state.set('userData',Immutable.Map(action.details))
		case ActionTypes.RECEIVE_MY_DATA:
			return state.set('myData',Immutable.Map(action.details))
		default:
			return state
	}
}

module.exports = profileReducer