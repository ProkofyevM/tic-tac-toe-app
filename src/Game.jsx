import './App.css'
import './App.css'
import { GameLayout } from './Components/GameLayout'
import { store } from './store'
import { useEffect, useState } from 'react'

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
	const [updateFields, setUpdateFields] = useState(false)

	useEffect(() => {
		const subscribe = store.subscribe(() => {
			setUpdateFields(!updateFields)
		})
		return () => subscribe()
	}, [updateFields])

	const { currentPlayer, isGameEnded, field } = store.getState()

	const handleClick = (i) => {
		if (field[i] !== '' || isGameEnded) {
			return
		}
		const newField = [...field]
		newField[i] = currentPlayer
		store.dispatch({ type: 'SET_FIELD', payload: newField })

		showWinner(newField)
	}

	const showWinner = (arr) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i]
			if (arr[a] === arr[b] && arr[b] === arr[c] && arr[a] !== '') {
				store.dispatch({ type: 'SET_GAME_ENDED', payload: true })
				return arr[a]
			}
		}
		if (!arr.includes('')) {
			store.dispatch({ type: 'SET_GAME_ENDED', payload: true })
			store.dispatch({ type: 'SET_IS_DRAW' })
		}
		currentPlayer === 'X'
			? store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: '0' })
			: store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' })
	}

	const handelClickRestart = () => {
		store.dispatch({ type: 'SET_IS_DRAW', payload: false })
		store.dispatch({ type: 'SET_FIELD', payload: Array(9).fill('') })
		store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' })
		store.dispatch({ type: 'SET_GAME_ENDED', payload: false })

		setUpdateFields(!updateFields)
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
