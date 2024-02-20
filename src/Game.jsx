import './App.css'
import { useState } from 'react'
import './App.css'
import { GameLayout } from './Components/GameLayout'

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
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(Array(9).fill(''))

	const handleClick = (i) => {
		if (field[i] !== '' || isGameEnded) {
			return
		}
		const newField = [...field]
		newField[i] = currentPlayer
		setField(newField)

		showWinner(newField)
	}

	const showWinner = (arr) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i]
			if (arr[a] === arr[b] && arr[b] === arr[c] && arr[a] !== '') {
				if (arr[a] === 'X') {
					setCurrentPlayer('X')
				} else {
					setCurrentPlayer('0')
				}
				setIsGameEnded(true)
				return
			}
			if (!arr[i].includes('')) {
				setIsDraw(true)
				setIsGameEnded(true)
			}
		}
		currentPlayer === 'X' ? setCurrentPlayer('0') : setCurrentPlayer('X')
	}

	const handelClickRestart = () => {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(Array(9).fill(''))
	}

	return (
		<div className="app">
			<GameLayout
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				field={field}
				handleClick={handleClick}
				handelClickRestart={handelClickRestart}
			/>
		</div>
	)
}
