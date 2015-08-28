import Dispatcher from 'dispatcher/Dispatcher'
import {EventEmitter} from 'events'
import assign from 'object-assign'
import ActionTypes from 'constants/Constants'

var CHANGE_EVENT = "change";
var _meals = [];

//TODO: export instance of this class not the actual class

export class MealsTableStore extends EventEmitter {

	constructor(){
		super()
	}

	sortByDistance(){
		_meals.sort(function(a,b){return a.distance - b.distance});
	}

	getMeals(){
		return _meals;
	}
	
	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
}

MealsTableStore.dispatchToken = Dispatcher.register(function(action) {


  switch(action.type) {

  	case ActionTypes.RECEIVE_ALL_MEALS:
  		_meals = action.details;
  		MealsTableStore.sortByDistance();
  		MealsTableStore.emitChange();
  		break;
    default:
      // do nothing
  }

});

module.exports = MealsTableStore