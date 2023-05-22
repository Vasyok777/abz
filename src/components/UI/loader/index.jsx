import styles from './Loader.module.scss'
const Loader = ({ className }) => {
	return (
		<div className={`${styles['lds-ring']} ${className}`}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
export default Loader
