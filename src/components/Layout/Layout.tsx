import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout