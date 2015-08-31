import React, {Component, PropTypes} from 'react'
import classNames from 'classNames'

export default class JoinButton extends Component {

	render(){
		
		var status = classNames('joinButton',this.props.joinStatus)

		return (
			<div className={status}></div>
		)
	}
}

JoinButton.propTypes = {
	joinStatus: PropTypes.string
}