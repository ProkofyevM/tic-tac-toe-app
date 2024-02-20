import PropTypes from 'prop-types'
import { InformationLayout } from './InformationLayout'


export const Information = ({ currentPlayer, isGameEnded, isDraw  }) => {
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


Information.propTypes ={
   currentPlayer: PropTypes.string,
   isGameEnded: PropTypes.bool,
   isDraw: PropTypes.bool
}