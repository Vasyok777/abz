import { useState } from 'react'
import Loader from 'components/UI/loader'
import Title from '../title/Title'
import styles from './LoginUser.module.scss'
import FormLogin from './form/FormLogin'
import SuccessMessage from './form/SuccessMessage'
const LoginUser = () => {
	const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
	const [isFormSubmitted, setIsFormSubmitted] = useState(false)
	if (isFormSubmitted) {
		return (
			<>
				{isLoadingSubmit ? (
					<Loader className={styles.loader} />
				) : (
					<SuccessMessage />
				)}
			</>
		)
	}
	return (
		<section className={styles.login}>
			<div className='container'>
				<div className={styles.login__wrapper}>
					<Title method={'POST'} />
					{isLoadingSubmit ? <Loader className={styles.loader} /> : ''}
					<FormLogin
						setIsLoadingSubmit={setIsLoadingSubmit}
						isLoadingSubmit={isLoadingSubmit}
						setIsFormSubmitted={setIsFormSubmitted}
					/>
				</div>
			</div>
		</section>
	)
}

export default LoginUser
