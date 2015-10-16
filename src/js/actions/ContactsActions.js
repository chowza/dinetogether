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

function fetchContacts(profileId){
  return dispatch => {
    dispatch(requestContacts());
    return fetch(`${Global.host}/users/${profileId}/chatGroups`)
        .then(response => response.json())
        .then(json => dispatch(receiveContacts(json)))  
  }
}

function shouldFetchContacts(state){
  const reducer = state.contactsReducer
  
  //TODO: handle when contacts size changes (or return true to always update contacts, but that seems unnecessary, you wont increase contact commonly enough)

  if (!reducer.get('contacts').size){
    return true
  } else if (reducer.get('isFetching')){
    return false
  } else {
    return reducer.get('didInvalidate')
  }
}

export function fetchContactsIfNeeded(profileId){
  return (dispatch,getState) => {
    if (shouldFetchContacts(getState())){
      return dispatch(fetchContacts(profileId))
    } else {
      return Promise.resolve();
    }
  }
}
