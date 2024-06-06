import PropTypes from 'prop-types'
import { InformationLayout } from './InformationLayout'
import { currentPlayerSelect, isDrawSelect, isGameEndedSelect } from '../../selectors'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class InformationContainer extends Component {
	render() {
		const { currentPlayer, isDraw, isGameEnded } = this.props

		let text = null

		if (isDraw) {
			text = 'Ничья'
		} else if (isGameEnded) {
			text = `Победа_ ${currentPlayer}`
		} else {
			text = `Ходит_ ${currentPlayer}`
		}

		return <InformationLayout text={text} />
	}
}

const mapDispatchToProps = (state) => {
	return {
		currentPlayer: currentPlayerSelect(state),
		isDraw: isDrawSelect(state),
		isGameEnded: isGameEndedSelect(state),
	}
}

export const Information = connect(mapDispatchToProps)(InformationContainer)

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
}
