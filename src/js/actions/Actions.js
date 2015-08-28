import Dispatcher from 'dispatcher/Dispatcher'
import ActionTypes from 'constants/Constants'


var Actions = {

  receiveAllMeals:function(details){
    Dispatcher.dispatch({
      type: ActionTypes.RECEIVE_ALL_MEALS,
      details:details
    })
  },
  receiveUserData:function(details){
    Dispatcher.dispatch({
      type: ActionTypes.RECEIVE_USER_DATA,
      details:details
    })
  },
  receiveContacts:function(details){
    Dispatcher.dispatch({
      type: ActionTypes.RECEIVE_CONTACTS,
      details:details
    })
  },
  receiveMessage:function(details){
    Dispatcher.dispatch({
      type: ActionTypes.RECEIVE_MESSAGE,
      details:details
    })
  },
  toggleMenu:function(){
    Dispatcher.dispatch({
      type:ActionTypes.TOGGLE_MENU
    })
  },
  receiveMyMeals:function(details){
    Dispatcher.dispatch({
      type: ActionTypes.RECEIVE_MY_MEALS,
      details:details
    })
  },
  cancelMeal:function(details){
    Dispatcher.dispatch({
      type: ActionTypes.CANCEL_MEAL,
      details:details
    })
  },
  createMeal: function(details) {
    Dispatcher.dispatch({
      type: ActionTypes.CREATE_MEAL,
      details: details,
    });
  },
  createMessage: function(details) {
    Dispatcher.dispatch({
      type: ActionTypes.CREATE_MESSAGE,
      details: details,
    });
  },
  joinMeal: function(details) {
    Dispatcher.dispatch({
      type: ActionTypes.JOIN_MEAL,
      details: details,
    });
  }
  

}

module.exports = Actions