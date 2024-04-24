import styles from '../Field/Field.module.css'
import PropTypes from 'prop-types'
import { store } from '../../store'

export const Field = ({ onClick }) => {
	const { field } = store.getState()
	return (
		<div className={styles.buttons}>
			{field.map((btn, i) => (
				<button key={i} className={styles.button} onClick={() => onClick(i)}>
					{btn}
				</button>
			))}
		</div>
	)
}

Field.propTypes = {
	field: PropTypes.bool,
	onClick: PropTypes.func,
}
