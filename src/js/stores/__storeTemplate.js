var Dispatcher = require('../dispatcher/Dispatcher')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = require('../constants/Constants')

var CHANGE_EVENT = "change";

var ExampleStore = assign({}, EventEmitter.prototype, {
	
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

ExampleStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {

  	case ActionTypes:
  		
  		break;

    default:
      // do nothing
  }

});

module.exports = ExampleStore