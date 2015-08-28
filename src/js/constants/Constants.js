import keyMirror from 'keymirror'

var ActionTypes = keyMirror({

	RECEIVE_CONTACTS:null,

	RECEIVE_ALL_MEALS:null,
	RECEIVE_MY_MEALS:null,
	CREATE_MEAL: null,
	JOIN_MEAL:null,
	CANCEL_MEAL:null,
    

    TOGGLE_MENU:null,

	CREATE_MESSAGE: null,
    RECEIVE_MESSAGES:null,

    RECEIVE_USER_DATA:null,
    RECEIVE_MY_DATA:null
    
})

module.exports = ActionTypes