import styles from '../Field/Field.module.css'
import PropTypes from 'prop-types'

export const Field = ({ field, onClick }) => {
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

Field.propTypes ={
   field : PropTypes.bool,
   onClick: PropTypes.func
}