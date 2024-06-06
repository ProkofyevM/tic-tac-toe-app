import React, { Component } from 'react'
import { Field } from '../Components/Field/Field.jsx'
import { Information } from '../Components/Information/Information.jsx'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class GameLayoutContainer extends Component {
	render() {
		return (
			<>
				<Information />
				<Field handleClick={this.props.handleClick} />
				<button className="btnRestart" onClick={this.props.handelClickRestart}>
					Начать заново
				</button>
			</>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		currentPlayer: state.currentPlayer,
		isDraw: state.isDraw,
		isGameEnded: state.isGameEnded,
		field: state.field,
	}
}

export const GameLayout = connect(mapStateToProps)(GameLayoutContainer)

GameLayoutContainer.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.object,
	handleClick: PropTypes.func,
	handelClickRestart: PropTypes.func,
}
