import './App.css'
import './App.css'
import { GameLayout } from './Components/GameLayout'
import { useDispatch, useSelector } from 'react-redux'
import { currentPlayerSelect, isGameEndedSelect, filedSelect } from './selectors'

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
]

export const Game = () => {
	const dispatch = useDispatch()

	const currentPlayer = useSelector(currentPlayerSelect)
	const isGameEnded = useSelector(isGameEndedSelect)
	const field = useSelector(filedSelect)

	const handleClick = (i) => {
		if (field[i] !== '' || isGameEnded) {
			return
		}
		const newField = [...field]
		newField[i] = currentPlayer
		dispatch({ type: 'SET_FIELD', payload: newField })

		showWinner(newField)
	}

	const showWinner = (arr) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i]
			if (arr[a] === arr[b] && arr[b] === arr[c] && arr[a] !== '') {
				dispatch({ type: 'SET_GAME_ENDED', payload: true })
				return arr[a]
			}
		}
		if (!arr.includes('')) {
			dispatch({ type: 'SET_GAME_ENDED', payload: true })
			dispatch({ type: 'SET_IS_DRAW' })
		}
		currentPlayer === 'X'
			? dispatch({ type: 'SET_CURRENT_PLAYER', payload: '0' })
			: dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' })
	}

	const handelClickRestart = () => {
		dispatch({ type: 'SET_IS_DRAW', payload: false })
		dispatch({ type: 'SET_FIELD', payload: Array(9).fill('') })
		dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' })
		dispatch({ type: 'SET_GAME_ENDED', payload: false })
	}

	return (
		<div className="app">
			<GameLayout
				handleClick={handleClick}
				handelClickRestart={handelClickRestart}
			/>
		</div>
	)
}
