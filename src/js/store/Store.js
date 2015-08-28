import { combineReducers, createStore } from 'redux';

import contactsReducer from 'Reducers/contactsReducer'
import mealsReducer from 'Reducers/mealsReducer'
import menuReducer from 'Reducers/menuReducer'
import messagesReducer from 'Reducers/messagesReducer'
import profileReducer from 'Reducers/profileReducer'


let reducer = combineReducers({ contactsReducer, mealsReducer, menuReducer, messagesReducer, profileReducer });
let store = createStore(reducer);