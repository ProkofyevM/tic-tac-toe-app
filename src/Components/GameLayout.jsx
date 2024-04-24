import React from 'react'
import { Field } from '../Components/Field/Field.jsx'
import { Information } from '../Components/Information/Information.jsx'
import PropTypes from 'prop-types'

export const GameLayout = ({ handleClick, handelClickRestart }) => {
	return (
		<>
			<Information />
			<Field onClick={handleClick} />
			<button className="btnRestart" onClick={handelClickRestart}>
				Начать заново
			</button>
		</>
	)
}

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.object,
	handleClick: PropTypes.func,
	handelClickRestart: PropTypes.func,
}
