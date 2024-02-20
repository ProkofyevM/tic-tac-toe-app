import React from 'react'
import { Field } from '../Components/Field/Field.jsx'
import { Information } from '../Components/Information/Information.jsx'
import PropTypes from 'prop-types'

export const GameLayout = ({
	currentPlayer,
	isDraw,
	isGameEnded,
	field,
	handleClick,
	handelClickRestart,
}) => {
	return (
		<>
			<Information
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
			/>
			<Field field={field} onClick={handleClick} />
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
   handelClickRestart: PropTypes.func
}

