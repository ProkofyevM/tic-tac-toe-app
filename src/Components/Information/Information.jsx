import PropTypes from 'prop-types'
import { InformationLayout } from './InformationLayout'
import { currentPlayerSelect, isDrawSelect, isGameEndedSelect } from '../../selectors'
import { useSelector } from 'react-redux'

export const Information = () => {
	const currentPlayer = useSelector(currentPlayerSelect)
	const isDraw = useSelector(isDrawSelect)
	const isGameEnded = useSelector(isGameEndedSelect)

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
