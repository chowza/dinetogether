var Dispatcher = require('../dispatcher/Dispatcher')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = require('../constants/Constants')

var CHANGE_EVENT = "change";
var _userData = {};
var _opened = false;

var MenuStore = assign({}, EventEmitter.prototype, {

	getUserData:function(){
		return _userData;
	},

	getMenuState:function(){
		return _opened;
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

MenuStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {

  	case ActionTypes.RECEIVE_USER_DATA:
  		_userData = action.details;
  		MenuStore.emitChange();
  		break;
  		
  	case ActionTypes.TOGGLE_MENU:
  		_opened = !_opened;
  		MenuStore.emitChange();
  		break;

    default:
      // do nothing
  }

});

module.exports = MenuStore