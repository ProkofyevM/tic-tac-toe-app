export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
}
export const appReducer = (state = initialState, action) => {
	const { type, payload } = action
	console.log('Before:', state)
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			let currentPlayerSign = 'X'
			if (state.currentPlayer === 'X') {
				currentPlayerSign = '0'
			} else {
				currentPlayerSign = 'X'
			}
			return {
				...state,
				currentPlayer: currentPlayerSign,
			}
		case 'SET_GAME_ENDED':
			return {
				...state,
				isGameEnded: payload,
				currentPlayer: 'X',
			}
		case 'SET_IS_DRAW':
			return {
				...state,
				isDraw: true,
			}
		case 'SET_FIELD':
			return {
				...state,
				field: payload,
				isDraw: false,
			}

		default:
			return state
	}
}
