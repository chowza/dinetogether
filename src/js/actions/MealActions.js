import ActionTypes from 'js/constants/Constants';
import fetch from 'isomorphic-fetch';
import Global from 'js/utils/Global';

function requestMeals(requestType){
  return {
    type: ActionTypes.REQUEST_MEALS,
    requestType
  }
}

function receiveMeals(requestType,details){
  return {
            type: ActionTypes.RECEIVE_MEALS,
            requestType,
            details:details
        }
}

function fetchMeals(requestType){
  return dispatch => {
    dispatch(requestMeals(requestType));
    if (requestType == 'allMeals'){
      return fetch(Global.host + '/data/mockData.json')
        .then(response => response.json())
        .then(json => dispatch(receiveMeals(requestType,json)))  
    } else {
      return fetch(Global.host + '/data/myMeals.json')
        .then(response => response.json())
        .then(json => dispatch(receiveMeals(requestType,json)))
    }
  }
}

function shouldFetchMeals(state,requestType){
  const meals = state.mealsReducer.get(requestType)
  if (!meals.items.size){
    return true
  } else if (meals.isFetching){
    return false
  } else {
    return meals.didInvalidate
  }
}

export function fetchMealsIfNeeded(requestType){
  return (dispatch,getState) => {
    if (shouldFetchMeals(getState(),requestType)){
      return dispatch(fetchMeals(requestType))
    } else {
      return Promise.resolve();
    }
  }
}
