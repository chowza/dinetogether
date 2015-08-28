var Dispatcher = require('../dispatcher/Dispatcher')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = require('../constants/Constants')

var CHANGE_EVENT = "change";
var _myMeals = [];

var MyMealsStore = assign({}, EventEmitter.prototype, {

	getMeals:function(){
		return _myMeals;
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

MyMealsStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {

  	case ActionTypes.RECEIVE_MY_MEALS:
  		_myMeals = action.details;
  		MyMealsStore.emitChange();
  		break;

    default:
      // do nothing
  }

});

module.exports = MyMealsStore