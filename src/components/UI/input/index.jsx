import { forwardRef } from 'react'
import InputMask from 'react-input-mask'
import styles from './Input.module.scss'

const Input = forwardRef(
	({ type, label, helperText, errors, className, ...rest }, ref) => {
		return (
			<>
				<label>
					{helperText === '+38 (XXX) XXX - XX - XX' ? (
						<InputMask
							{...rest}
							ref={ref}
							className={`${styles.input} ${className} ${
								errors ? styles.errors : ''
							}`}
							required
							mask='+38 (099) 999-99-99'
							// placeholder='+38 (___) ___-__-__'
						/>
					) : (
						<input
							ref={ref}
							className={`${styles.input} ${className} ${
								errors ? styles.errors : ''
							}`}
							type={type}
							{...rest}
							required
						/>
					)}
					<span
						className={`${styles.input__text} ${errors ? styles.errors : ''}`}
					>
						{label}
					</span>
					{errors ? (
						<span className={styles.helper__errors}>{errors.message}</span>
					) : (
						<span className={styles.helper__text}>{helperText}</span>
					)}
				</label>
			</>
		)
	}
)

export default Input
