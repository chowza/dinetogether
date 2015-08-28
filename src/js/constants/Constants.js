import keyMirror from 'keymirror'

var ActionTypes = keyMirror({
	RECEIVE_ALL_MEALS:null,
    RECEIVE_USER_DATA:null,
    RECEIVE_CONTACTS:null,
    TOGGLE_MENU:null,
    RECEIVE_MY_MEALS:null,
    CANCEL_MEAL:null,
    CREATE_MEAL: null,
    CREATE_MESSAGE: null,
    JOIN_MEAL:null
})

module.exports = ActionTypes