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
  console.log("receiving meals",details)
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
      return fetch(`${Global.host}/meals`)
        .then(response => response.json())
        .then(json => dispatch(receiveMeals(requestType,json)))  
    } else {
      return fetch(`${Global.host}/users/${requestType}/meals`)
        .then(response => response.json())
        .then(json => dispatch(receiveMeals(requestType,json)))
    }
  }
}

function shouldFetchMeals(state,requestType){
  const meals = state.mealsReducer.get(requestType)
  if (!meals){
    return true
  } else if (!meals.items.size){
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


function createMealSuccess(details){
  console.log("successfully created meal with details:",details)
  return {
    type: ActionTypes.CREATE_MEAL_SUCCESS,
    details
  }
}

function createMealRequest(){
  return {
    type: ActionTypes.CREATE_MEAL_POST
  }
}

export function createMealPost(profileId,data){
  return dispatch =>{
    dispatch(createMealRequest())
    return fetch(`${Global.host}/users/${profileId}/meals`,{
      method:'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(createMealSuccess(json))
    })
  }
}