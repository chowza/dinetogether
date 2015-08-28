var Dispatcher = require('dispatcher/Dispatcher')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = require('constants/Constants')

var CHANGE_EVENT = "change";
var _messages = [];

var MessagesStore = assign({}, EventEmitter.prototype, {

	sortMessages:function(){
		_messages.sort(function(a,b){return a.createdAt - b.createdAt})
	},

	getMessages:function(){
		return _messages;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
})

MessagesStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {

  	case ActionTypes.CREATE_MESSAGE:
  		_messages.push(action.details);
  		MessagesStore.emitChange();
  		break;
  	case ActionTypes.RECEIVE_MESSAGE:
		_messages = action.details;
  		MessagesStore.sortMessages();
  		MessagesStore.emitChange();
  		break;
	
    default:
      // do nothing
  }

});

module.exports = MessagesStore