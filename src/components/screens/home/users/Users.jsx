import { useQuery } from '@tanstack/react-query'
import Button from 'components/UI/button'
import SkeletonUsers from 'components/UI/skeleton'
import { useState } from 'react'
import { UsersService } from 'services/user.service'
import Title from '../title/Title'
import styles from './Users.module.scss'
import UserItem from './userItem'

const Users = () => {
	const [page, setPage] = useState(1)
	const { data, isLoading, isFetchingMore } = useQuery(
		['users', page],
		() => UsersService.getUsers(page),
		{
			keepPreviousData: true,
		}
	)

	const handleShowMoreUsers = () => {
		setPage(prevPage => prevPage + 1)
	}

	return (
		<section className={styles.users}>
			<div className='container'>
				<div className={styles.users__wrapper}>
					<Title method='GET' />
					<div className={styles.users__box}>
						{isLoading && !data ? (
							[...new Array(6)].map((_, idx) => <SkeletonUsers key={idx} />)
						) : (
							<>
								{data.users.map(user => (
									<UserItem key={user.id} user={user} />
								))}
							</>
						)}
					</div>
					{!isLoading && data.page < data.total_pages && (
						<Button
							onClick={handleShowMoreUsers}
							disabled={isFetchingMore}
							className={styles.users__btn}
						>
							{isFetchingMore ? 'Loading...' : 'Show more'}
						</Button>
					)}
				</div>
			</div>
		</section>
	)
}

export default Users
