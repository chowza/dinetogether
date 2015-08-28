import React from 'react';
import Router from 'react-router';

const {Route, RouteHandler, DefaultRoute} = Router;

import MealsTable from "component/MealsTable/MealsTable.js"

import MyMeals from "component/MyMeals/MyMeals.js"
import ContactsTable from "component/ContactsTable/ContactsTable.js"
import Settings from "component/Settings/Settings.js"
import MessagesTable from "component/MessagesTable/MessagesTable.js"
import Profile from "component/Profile/Profile.js"
import CreateMeal from "component/CreateMeal/CreateMeal.js"

import NavHeader from "component/Shared/NavHeader/NavHeader.js"
import Menu from "component/Shared/Menu/Menu.js"


class App extends React.Component {

	render(){
		return (
			<div>
				<NavHeader/>
				<Menu/>
				<RouteHandler/>
			</div>
		)
	}
}


let routes = (
	<Route name="app" path="/" handler={App}>
	    <DefaultRoute handler={MealsTable}/>
	    <Route name="myMeals" path="/myMeals/:userId" handler={MyMeals}/>
	    <Route name="contactsTable" handler={ContactsTable}/>
	    <Route name="settings" handler={Settings}/>
	    <Route name="messagesTable" path="/messagesTable/:chatId" handler={MessagesTable}/>
	    <Route name="profile" path="/profile/:userId" handler={Profile}/>
	    <Route name="createMeal" handler={CreateMeal}/>
  	</Route>
)

Router.run(routes, Router.HashLocation,function (Handler) {
  React.render(<Handler/>, document.body);
});