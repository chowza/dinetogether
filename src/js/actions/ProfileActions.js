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

export function fetchProfileIfNeeded(profileId){
  return (dispatch,getState) => {
    if (shouldFetchProfile(getState(),profileId)){
      return dispatch(fetchProfile(profileId))
    } else {
      return Promise.resolve();
    }
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

export function fetchProfile(profileId){
  return dispatch => {
    dispatch(requestProfile(profileId));

    FB.api("/","POST",{
        batch: [
        { method: 'GET', relative_url: `/${profileId}?fields=first_name`},
        { method: 'GET', relative_url: `/${profileId}/picture?type=normal&redirect=false`}
        ]
    }, response => {
      return fetch(`${Global.host}/users/${profileId}?name=${JSON.parse(response[0].body).first_name}&image=${encodeURIComponent(JSON.parse(response[1].body).data.url)}`)
        .then(response => response.json())
        .then(json => dispatch(receiveProfile(profileId,json)))
    })

    // FB.api("/" + profileId + "?fields=first_name", response => {
    //   console.log("fetching logged in person's info",response)
    //   return fetch(Global.host + '/users/' + profileId +"?name=" + response.first_name)
    //     .then(response => response.json())
    //     .then(json => dispatch(receiveProfile(profileId,json)))  
    // })
  }
}

