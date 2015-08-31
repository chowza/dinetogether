import React, {Component} from 'react'

import NavHeader from "js/components/NavHeader"
import MenuContainer from "js/containers/MenuContainer"

export default class App extends Component {
	render(){
		return (
			<div>
				<NavHeader/>
				<MenuContainer/>
				{/* this.props.children are the routes */}
				{this.props.children}
			</div>
		)
	}
}
