import logo from 'assets/image/Logo.svg'
import Button from 'components/UI/button'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<div className='container'>
					<nav className={styles.header__nav}>
						<ul className={styles.header__list}>
							<li className={styles.header__item}>
								<a href='/' className={styles.header__link}>
									<img src={logo} alt='Logo' className={styles.header__logo} />
								</a>
							</li>
							<li className={styles.header__btn}>
								<a href='#users'>
									<Button>Users</Button>
								</a>
								<a href='#signup'>
									<Button>Sign up</Button>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header
