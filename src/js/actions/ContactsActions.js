import ActionTypes from 'js/constants/Constants';
import fetch from 'isomorphic-fetch';
import Global from 'js/utils/Global';

function requestContacts(){
  return {
    type: ActionTypes.REQUEST_CONTACTS
  }
}

function receiveContacts(details){
  return {
            type: ActionTypes.RECEIVE_CONTACTS,
            details:details
        }
}

function fetchContacts(){
  return dispatch => {
    dispatch(requestContacts());
    return fetch(Global.host + '/data/contactsData.json')
        .then(response => response.json())
        .then(json => dispatch(receiveContacts(json)))  
  }
}

function shouldFetchContacts(state){
  const reducer = state.contactsReducer
  if (!reducer.get('contacts').size){
    return true
  } else if (reducer.get('isFetching')){
    return false
  } else {
    return reducer.get('didInvalidate')
  }
}

export function fetchContactsIfNeeded(){
  return (dispatch,getState) => {
    if (shouldFetchContacts(getState())){
      return dispatch(fetchContacts())
    } else {
      return Promise.resolve();
    }
  }
}
