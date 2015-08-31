import ActionTypes from 'js/constants/Constants';
import fetch from 'isomorphic-fetch';
import Global from 'js/utils/Global';

function requestProfile(profileId){
  return {
    type: ActionTypes.REQUEST_PROFILE,
    profileId
  }
}

function receiveProfile(profileId,details){
  return {
            type: ActionTypes.RECEIVE_PROFILE,
            profileId,
            details:details
        }
}

function fetchProfile(profileId){
  return dispatch => {
    dispatch(requestProfile(profileId));
    //TODO: fetch from specific profileId
    return fetch(Global.host + '/data/userData.json')
        .then(response => response.json())
        .then(json => dispatch(receiveProfile(profileId,json)))  
  }
}

function shouldFetchProfile(state,profileId){
  const profile = state.profileReducer.get(profileId)
  if (!profile){
    return true
  } else if (profile.isFetching){
    return false
  } else {
    return profile.didInvalidate
  }
}

export function fetchProfileIfNeeded(profileId){
  return (dispatch,getState) => {
    if (shouldFetchProfile(getState(),profileId)){
      return dispatch(fetchProfile(profileId))
    } else {
      return Promise.resolve();
    }
  }
}
