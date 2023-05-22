import Button from 'components/UI/button'
import styles from './Promo.module.scss'
const Promo = () => {
	return (
		<section className={styles.promo}>
			<div className='container container__full'>
				<div className={styles.promo__box}>
					<div className={styles.promo__content}>
						<h1 className='title'>Test assignment for front-end developer</h1>
						<p className={styles.promo__text}>
							What defines a good front-end developer is one that has skilled
							knowledge of HTML, CSS, JS with a vast understanding of User
							design thinking as they'll be building web interfaces with
							accessibility in mind. They should also be excited to learn, as
							the world of Front-End Development keeps evolving.
						</p>
						<Button>Sign up</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Promo
