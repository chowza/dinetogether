import Immutable from 'immutable'
import ActionTypes from 'js/constants/Constants';;


let initialState = Immutable.Map({
	menuState:false,
});

export default function menuReducer(state=initialState,action){
	switch(action.type){
		case ActionTypes.TOGGLE_MENU:
			return state.set('menuState',!state.get('menuState'))
		default:
			return state
	}
}
