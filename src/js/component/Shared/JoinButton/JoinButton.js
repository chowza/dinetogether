import React from 'react'
import classNames from 'classNames'

export class JoinButton extends React.Component {

	render(){
		
		var status = classNames('joinButton',this.props.joinStatus)

		return (
			<div className={status}></div>
		)
	}
}

module.exports = JoinButton