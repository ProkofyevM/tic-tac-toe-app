import styles from '../Field/Field.module.css'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class FieldContainer extends Component {
	render() {
		const field = this.props.field
    console.log(field)

		return (
			<div className={styles.buttons}>
				{field.map((btn, i) => (
					<button
						key={i}
						className={styles.button}
						onClick={() => this.props.handleClick(i)}
					>
						{btn}
					</button>
				))}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		field: state.field,
	}
}

export const Field = connect(mapStateToProps)(FieldContainer)

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	onClick: PropTypes.func,
}
