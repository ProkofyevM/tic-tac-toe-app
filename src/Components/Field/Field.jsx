import styles from '../Field/Field.module.css'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { filedSelect } from '../../selectors/select-field'

export const Field = ({ onClick }) => {
	const field = useSelector(filedSelect)
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
