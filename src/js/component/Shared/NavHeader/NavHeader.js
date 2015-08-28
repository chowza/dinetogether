import React from 'react'
import {Link} from 'react-router';
import Actions from 'actions/Actions.js';

export class NavHeader extends React.Component {

	toggleMenu(){
		Actions.toggleMenu();
	}

	render(){
		return (
			<div className="navHeader">
				<div className="navHamburger" onClick={this.toggleMenu}>nav hamburger here</div>
				<Link to="createMeal">Create Meal</Link>
			</div>
		)
	}
}

module.exports = NavHeader