import successImg from '../../../../../assets/image/success.svg'
import styles from './SuccessMessage.module.scss'
const SuccessMessage = () => {
	return (
		<div className={styles.root}>
			<div className='container'>
				<h2 className={styles.title}>User successfully registered</h2>
				<div className={styles.root__img}>
					<img src={successImg} className={styles.img} alt='Success img' />
				</div>
			</div>
		</div>
	)
}
export default SuccessMessage
