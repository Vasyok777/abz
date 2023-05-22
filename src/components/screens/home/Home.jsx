import styles from './Home.module.scss';
import Users from './users/Users';
import Header from './header/Header';
import Promo from './promo/Promo';
import LoginUser from './login/LoginUser';
const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Promo /> 
        <Users/>
        <LoginUser />
      </main>
    </>
  )
}

export default Home