require('!style!css!stylus!css/index')
require('!style!css!stylus!css/mixins')
require('!style!css!stylus!css/resets')

import React, {Component} from 'react'
import {Provider} from 'react-redux'

import store from 'js/store/Store'

import {Route,Router,Redirect} from 'react-router'
import HashHistory from 'react-router/lib/HashHistory';

import App from 'js/app'
import MealsTable from "js/containers/MealsTable"
import ContactsTable from "js/containers/ContactsTable"
import MessagesTable from "js/containers/MessagesTable"


// import MyMeals from "component/MyMeals/MyMeals"

// import Settings from "component/Settings/Settings"
// import MessagesTable from "component/MessagesTable/MessagesTable"
// import Profile from "component/Profile/Profile"
// import CreateMeal from "component/CreateMeal/CreateMeal"

// import NavHeader from "component/Shared/NavHeader/NavHeader"
// import Menu from "component/Shared/Menu/Menu"
//<Route path="myMeals" path="/myMeals/:userId" component={MyMeals}/>
//<Route path="settings" component={Settings}/>
//<Route path="profile" path="/profile/:userId" component={Profile}/>
//<Route path="createMeal" component={CreateMeal}/>

const history = new HashHistory();

class Root extends Component {
	render(){
		return (
			<Provider store={store}> 
				{()=> 
					<Router history ={history}>
						<Route component={App}>
							<Redirect from="/" to="/meals/allMeals" />
							<Route path="meals/:userId" component={MealsTable} />
							<Route path="contactsTable" component={ContactsTable}/>
						    <Route path="messagesTable" component={MessagesTable}/>
					  	</Route>
					</Router>
				}
			</Provider>
		)
	}
}

React.render(<Root/>, document.body);