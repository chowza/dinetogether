import keyMirror from 'keymirror'

var ActionTypes = keyMirror({

	REQUEST_CONTACTS:null,
	RECEIVE_CONTACTS:null,
	INVALIDATE_CONTACTS:null,

	REQUEST_MEALS:null,
	INVALIDATE_MEALS:null,
	RECEIVE_MEALS:null,
	CREATE_MEAL: null,
	JOIN_MEAL:null,
	CANCEL_MEAL:null,
    

    TOGGLE_MENU:null,

	CREATE_MESSAGE: null,
	REQUEST_MESSAGES:null,
    RECEIVE_MESSAGES:null,
    INVALIDATE_MESSAGES:null,

    REQUEST_PROFILE:null,
    RECEIVE_PROFILE:null,
    INVALIDATE_PROFILE:null,

    GET_LOGIN_STATUS:null
    
})

module.exports = ActionTypes