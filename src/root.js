require('!style!css!stylus!css/index')
require('!style!css!stylus!css/mixins')
require('!style!css!stylus!css/resets')

import React, {Component} from 'react'
import {Provider} from 'react-redux'

import store from 'js/store/Store'

import {Route,Router,Redirect} from 'react-router'
import HashHistory from 'react-router/lib/HashHistory';
import BrowserHistory from 'react-router/lib/BrowserHistory';

import App from 'js/app'
import MealsTable from "js/containers/MealsTable"
import ContactsTable from "js/containers/ContactsTable"
import MessagesTable from "js/containers/MessagesTable"
import Profile from "js/containers/ProfileContainer"
import Settings from "js/components/Settings"


// import CreateMeal from "component/CreateMeal/CreateMeal"

//<Route path="createMeal" component={CreateMeal}/>

const history = new BrowserHistory();

class Root extends Component {
	render(){
		return (
			<Provider store={store}> 
				{()=> 
					<Router history ={history}>
						<Route component={App}>
							<Redirect from="/" to="meals/allMeals" />
							<Redirect from="/index" to="meals/allMeals" />
							<Route path="meals/:userId" component={MealsTable} />
							<Route path="contactsTable" component={ContactsTable}/>
						    <Route path="messagesTable/:chatId" component={MessagesTable}/>
						    <Route path="settings" component={Settings}/>
						    <Route path="profile/:userId" component={Profile}/>
					  	</Route>
					</Router>
				}
			</Provider>
		)
	}
}

React.render(<Root/>, document.body);