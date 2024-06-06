import styles from '../Information/Information.module.css'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class InformationLayout extends Component {
	render() {
		return <div className={styles.info}>{this.props.text}</div>
	}
}

InformationLayout.propTypes = {
	text: PropTypes.string,
}
