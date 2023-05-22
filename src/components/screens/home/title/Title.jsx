import styles from './Title.module.scss';
const Title = ({method}) => {
  return (
    <h2 className={`title ${styles.title}`}>
      Working with {method} request
    </h2>
  )
}

export default Title