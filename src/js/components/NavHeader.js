import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router';

import {toggleMenu} from 'js/actions/MenuActions.js';

export default class NavHeader extends React.Component {

	toggleMenu(){
		dispatch(toggleMenu());
	}

	render(){
		//<Link to="createMeal">Create Meal</Link>
		return (
			<div className="navHeader">
				<div className="navHamburger" onClick={this.toggleMenu}>nav hamburger here</div>
			</div>
		)
	}
}
