export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER'
export const SET_GAME_ENDED = 'SET_GAME_ENDED'
export const SET_IS_DRAW = 'SET_IS_DRAW'
export const SET_FIELD = 'SET_FIELD'

export const setCurrentPlayer = (player) => ({
	type: SET_CURRENT_PLAYER,
	payload: player,
})

export const setIsGameEnded = (isGameEnd) => ({
	type: SET_GAME_ENDED,
	payload: isGameEnd,
})

export const setIsDraw = (isDraw) => ({
	type: SET_IS_DRAW,
	payload: isDraw,
})

export const setField = (field) => ({
	type: SET_FIELD,
	payload: field,
})
