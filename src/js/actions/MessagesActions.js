import ActionTypes from 'js/constants/Constants';
import Global from 'js/utils/Global';
import fetch from 'isomorphic-fetch';

export function fetchMessagesIfNeeded(profileId,contactId){
  return (dispatch,getState) => {
    if (shouldFetchMessages(getState(),contactId)){
      return dispatch(fetchMessages(profileId,contactId))
    } else {
      return Promise.resolve();
    }
  }
}

function shouldFetchMessages(state,contactId){
  const messagesForContact = state.messagesReducer.get(contactId)
  if (!messagesForContact){
    return true
  } else if (messagesForContact.isFetching){
    return false
  } else {
    return messagesForContact.didInvalidate
  }
}

export function fetchMessages(profileId,contactId){
  return dispatch => {
    dispatch(requestMessages(contactId));
    //TODO: fetch from specific contactId
    return fetch(`${Global.host}/users/${profileId}/chatGroups/${contactId}`)
        .then(response => response.json())
        .then(json => dispatch(receiveMessages(contactId,json)))  
  }
}

function requestMessages(contactId){
  return {
    type: ActionTypes.REQUEST_MESSAGES,
    contactId
  }
}

function receiveMessages(contactId,details){
  return {
            type: ActionTypes.RECEIVE_MESSAGES,
            contactId,
            details:details
        }
}