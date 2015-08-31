import React, {Component, PropTypes} from 'react'
import classNames from 'classNames'

export default class Rating extends Component {

	render(){

		var ratings = classNames(
			{ oneStar: this.props.rating >= 1}, { oneHalfStar: this.props.rating >= 1.4 && this.props.rating <=1.6},
			{ twoStar: this.props.rating >= 2}, { twoHalfStar: this.props.rating >= 2.4 && this.props.rating <=2.6},
			{ threeStar: this.props.rating >= 3}, { threeHalfStar: this.props.rating >= 3.4 && this.props.rating <=3.6},
			{ fourStar: this.props.rating >= 4}, { fourHalfStar: this.props.rating >= 4.4 && this.props.rating <=4.6},
			{ fiveStar: this.props.rating >= 5}
		)

		return (
			<div className={ratings}>{this.props.rating}
				<div className="rating-stars"></div>
				<div className="rating-stars"></div>
				<div className="rating-stars"></div>
				<div className="rating-stars"></div>
				<div className="rating-stars"></div>
			</div>
		)
	}
}

Rating.propTypes = {
	rating: PropTypes.number
}