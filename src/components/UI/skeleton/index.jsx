import React from 'react'
import ContentLoader from 'react-content-loader'
import styles from './Skeleton.module.scss'

const SkeletonUsers = props => (
	<ContentLoader
		className={styles.root}
		speed={2}
		width={340}
		height={254}
		viewBox='0 0 340 254'
		backgroundColor='#f5f5f5'
		foregroundColor='#e6e6e6'
		{...props}
	>
		<rect x='470' y='150' rx='3' ry='3' width='140' height='11' />
		<rect x='114' y='122' rx='0' ry='0' width='132' height='12' />
		<rect x='83' y='156' rx='0' ry='0' width='182' height='12' />
		<rect x='108' y='183' rx='0' ry='0' width='140' height='9' />
		<rect x='86' y='211' rx='0' ry='0' width='184' height='13' />
		<circle cx='178' cy='58' r='39' />
		<circle cx='104' cy='55' r='2' />
	</ContentLoader>
)

export default SkeletonUsers
