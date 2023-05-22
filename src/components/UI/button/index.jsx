import styles from './Button.module.scss'

const Button = ({ disabled, className, children, ...restProps }) => {
	const buttonClassName = `${
		disabled ? styles.disabled__button : styles.button
	} ${className}`
	return (
		<button className={buttonClassName} {...restProps}>
			{children}
		</button>
	)
}

export default Button
