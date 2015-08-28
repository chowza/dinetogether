var Dispatcher = require('dispatcher/Dispatcher')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = require('constants/Constants')

var CHANGE_EVENT = "change";

var JoinStore = assign({}, EventEmitter.prototype, {
	
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

JoinStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {

  	case: ActionTypes.JOIN_MEAL
  		
  		
  		JoinStore.emitChange();

  		break;

    default:
      // do nothing
  }

});

module.exports = JoinStore