import './App.css'
import React, { Component } from 'react'
import { GameLayout } from './Components/GameLayout'
import { connect } from 'react-redux'
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

class GameContainer extends Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
		this.showWinner = this.showWinner.bind(this)
		this.handelClickRestart = this.handelClickRestart.bind(this)
	}
	handleClick(i) {
		const { currentPlayer, isGameEnded, field, dispatch } = this.props
		if (field[i] !== '' || isGameEnded) {
			return
		}
		const newField = [...field]
		newField[i] = currentPlayer
		dispatch({ type: 'SET_FIELD', payload: newField })

		this.showWinner(newField)

		currentPlayer === 'X'
			? dispatch({ type: 'SET_CURRENT_PLAYER', payload: '0' })
			: dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' })
	}

	showWinner(arr) {
		const { currentPlayer, dispatch } = this.props
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
		this.setState({ currentPlayer: currentPlayer === 'X' ? '0' : 'X' })
	}

	handelClickRestart() {
		const { dispatch } = this.props
		dispatch({ type: 'SET_IS_DRAW', payload: false })
		dispatch({ type: 'SET_FIELD', payload: Array(9).fill('') })
		dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' })
		dispatch({ type: 'SET_GAME_ENDED', payload: false })
	}

	render() {
		return (
			<div className="app">
				<GameLayout
					handleClick={this.handleClick}
					handelClickRestart={this.handelClickRestart}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: currentPlayerSelect(state),
	isGameEnded: isGameEndedSelect(state),
	field: filedSelect(state),
})

export const Game = connect(mapStateToProps)(GameContainer)
