import { combineReducers, createStore, applyMiddleware } from 'redux';

import contactsReducer from 'js/reducers/contactsReducer'
import mealsReducer from 'js/reducers/mealsReducer'
import menuReducer from 'js/reducers/menuReducer'
import messagesReducer from 'js/reducers/messagesReducer'
import profileReducer from 'js/reducers/profileReducer'


import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';


const reducer = combineReducers({ contactsReducer, mealsReducer, menuReducer, messagesReducer, profileReducer });
const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  logger // neat middleware that logs actions
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store

/*
state shape:

{
	contactsReducer: Immutable.List() 
	mealsReducer: {
		allMeals: Immutable.List()
		myMeals: Immutable.List()
	}
	menuReducer: menuState
	messagesReducer:
	profileReducer:
}


*/