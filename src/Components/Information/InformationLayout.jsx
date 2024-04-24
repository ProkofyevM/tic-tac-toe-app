import styles from '../Information/Information.module.css'
import PropTypes from 'prop-types'

export const InformationLayout = ({ text }) => <div className={styles.info}>{text}</div>

InformationLayout.propTypes = {
	text: PropTypes.string,
}
