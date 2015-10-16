require('!style!css!stylus!css/index')
require('!style!css!stylus!css/mixins')
require('!style!css!stylus!css/resets')
require('file?name=index.html!jade-html!./index')

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from 'js/store/Store'

import {Route,Router,Redirect} from 'react-router'
import createHashHistory from 'history/lib/createBrowserHistory'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from 'js/containers/App'
import AuthenticationContainer from 'js/containers/AuthenticationContainer'
import MealsTable from "js/containers/MealsTable"
import ContactsTable from "js/containers/ContactsTable"
import MessagesTable from "js/containers/MessagesTable"
import Profile from "js/containers/ProfileContainer"
import Settings from "js/components/Settings"

let history;

if (DEVELOPMENT){
	// browser refreshes due to live reloading causes path errors when working from webpack-dev-server/index.html,
	// however the errors don't happen if using hash history so we use hash history in development. 
	// (There's better ways around this but I'll implement it the correct way when I get a chance)
	history = createHashHistory();	
}

if (PRODUCTION){
	history = createBrowserHistory();		
}

class Root extends Component {
	render(){
		return (
			<Provider store={store}> 
				<Router history ={history}>
					<Route path="index.html" component={AuthenticationContainer} />
					<Route path="/" component={AuthenticationContainer} />
					<Route component={App}>
						<Route path="/meals/:userId" component={MealsTable} />
						<Route path="/contactsTable" component={ContactsTable}/>
					    <Route path="/messagesTable/:chatId" component={MessagesTable}/>
					    <Route path="/settings" component={Settings}/>
					    <Route path="/profile/:userId" component={Profile}/>
				  	</Route>
				</Router>
			</Provider>
		)
	}
}

ReactDOM.render(<Root/>, document.getElementById('container'));