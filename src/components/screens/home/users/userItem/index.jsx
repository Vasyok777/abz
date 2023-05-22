import Tooltip from 'components/UI/tooltip'
import styles from './UserItem.module.scss'
const UserItem = ({ user }) => {
	return (
		<>
			<div className={styles.user}>
				<img className={styles.user__img} src={user.photo} alt='User' />
				<h6 className={styles.user__name}>{user.name}</h6>
				<div className={styles.user__info}>
					<p className={styles.user__position}>{user.position}</p>
					<Tooltip tooltipText={user.email} position='bottom'>
						<p className={styles.user__email}>{user.email}</p>
					</Tooltip>
					<p className={styles.user__phone}>{user.phone}</p>
				</div>
			</div>
		</>
	)
}

export default UserItem
