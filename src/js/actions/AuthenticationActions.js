import ActionTypes from 'js/constants/Constants';
import fetch from 'isomorphic-fetch';
import Global from 'js/utils/Global';
import {fetchProfile} from 'js/actions/ProfileActions'


export function initFB(){

	return dispatch=>{
		
		window.fbAsyncInit = function() {
			FB.init({
			    appId      : '390296871178134',
			    cookie     : true,  // enable cookies to allow the server to access the session
			    xfbml      : true,  // parse social plugins on this page
			    version    : 'v2.4' // use version 2.2
			});

			return dispatch(getLoginStatus())
		}	
	}
}


export function getLoginStatus(){
	return dispatch => {
		FB.getLoginStatus( response => {return dispatch(statusRequestCallback(response))})
	}
}

function statusRequestCallback(response){
	return dispatch => {
		console.log(response)
		if (response.status === 'connected') {
	      	dispatch(checkLoginStatus(true))
	      	return dispatch(fetchProfile(response.authResponse.userID,response.authResponse.accessToken))
	    } else if (response.status === 'not_authorized') //The person is logged into Facebook, but not your app.
	    	return dispatch(login())
	    else {
	    	//otherwise the person is not logged into Facebook, so we're not sure if they are logged into the app. 
	      	dispatch(checkLoginStatus(false))
	    }	
	}
}

export function login(){
	return dispatch => {
		FB.login(response => {
			console.log(response)
			if (response.status === 'connected') {
				dispatch(checkLoginStatus(true))
				return dispatch(fetchProfile(response.authResponse.userID,response.authResponse.accessToken))
		    } else {
		    	dispatch(checkLoginStatus(false))
		    }			
		}, {scope: 'public_profile,user_friends'})
	}
}

function checkLoginStatus(loginStatus){
	return {
        type: ActionTypes.GET_LOGIN_STATUS,
        loginStatus:loginStatus
    }
}

export function logout(){
	return dispatch => {
		FB.logout(response => {
			dispatch(checkLoginStatus(false))
		})
	}
}