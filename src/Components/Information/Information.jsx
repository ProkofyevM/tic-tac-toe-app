import PropTypes from 'prop-types'
import { InformationLayout } from './InformationLayout'
import { store } from '../../store'

export const Information = () => {
	const { currentPlayer, isDraw, isGameEnded } = store.getState()
	let text = null

	if (isDraw) {
		console.log('isDraw', isDraw)
		text = 'Ничья'
	} else if (isGameEnded) {
		console.log('isGameEnded', isGameEnded)
		text = `Победа_ ${currentPlayer}`
	} else {
		text = `Ходит_ ${currentPlayer}`
	}

	return <InformationLayout text={text} />
}

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
}
