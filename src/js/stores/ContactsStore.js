import {createStore} from 'redux'
import Immutable from 'immutable'
import ActionTypes from 'constants/Constants';

let initialState = Immutable.List();

function sortByLastMessage(a,b) { return a.lastMessageTime - b.lastMessageTime }

function contactsManager(state=initialState,action){
	switch(action.type){
		case ActionTypes.RECEIVE_CONTACTS:
			return Immutable.List(action.details.sort(sortByLastMessage))
		case ActionTypes.RECEIVE_MESSAGE:
			return state.sort(sortByLastMessage)
		case:
			return state
	}
}

let store = createStore(contactsManager)

store.subscribe(()=> console.log(store.getState()))

// var Dispatcher = require('../dispatcher/Dispatcher')
// var EventEmitter = require('events').EventEmitter;
// var assign = require('object-assign');
// var ActionTypes = require('../constants/Constants')

// var CHANGE_EVENT = "change";
// var _contacts = [];

// var ContactsStore = assign({}, EventEmitter.prototype, {

// 	sortContacts:function(){
// 		_contacts.sort(function(a,b){return a.lastMessageTime - b.lastMessageTime});
// 	},

// 	getContacts:function(){
// 		return _contacts;
// 	},
	
// 	emitChange: function() {
// 		this.emit(CHANGE_EVENT);
// 	},

// 	addChangeListener: function(callback) {
// 		this.on(CHANGE_EVENT, callback);
// 	},

// 	removeChangeListener: function(callback) {
// 		this.removeListener(CHANGE_EVENT, callback);
// 	},
// })

// ContactsStore.dispatchToken = Dispatcher.register(function(action) {

//   switch(action.type) {

//   	case ActionTypes.RECEIVE_CONTACTS:
//   		_contacts = action.details;
//   		ContactsStore.sortContacts();
//   		ContactsStore.emitChange();
//   		break;
  		
//   	case ActionTypes.RECEIVE_MESSAGE:
//   		ContactsStore.sortContacts();
//   		ContactsStore.emitChange();
//   		break;

//     default:
//       // do nothing
//   }

// });

// module.exports = ContactsStore