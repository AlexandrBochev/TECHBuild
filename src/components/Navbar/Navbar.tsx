import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../SVG/LogoSvg'
import styles from './Navbar.module.scss'
import { navItems } from '../../database/navItems'
import Burger from './Burger';

const Navbar = () => {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false)
  const [menuOpen, setMenuOpen] = useState('')
  const [isScrolled, setIsScrolled] = useState('')


  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      setIsScrolled(styles.scrolled)
    } else {
      setIsScrolled('')
    }
  }

  const handleBurger = () => {
    setIsBurgerClicked(prev => !prev)
    isBurgerClicked ? setMenuOpen('') : setMenuOpen(styles.open)
  }

  const menuClose = () => {
    setIsBurgerClicked(false)
    setMenuOpen('')
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} ${isScrolled} ${menuOpen}`}>
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.logo}><Link to="/"><Logo /></Link></div>
          <ul>
            {navItems.map(item=>
              <li key={item.id} className={styles.item} onClick={menuClose}>
                <NavLink to={item.link} className={({isActive}) => isActive ? `${styles.active}` : '' }><span/>{item.name}<span/></NavLink>
              </li>)}
          </ul>
        </div>
        <div className={styles.burgerBtn} onClick={handleBurger}>
            <Burger isClicked={isBurgerClicked} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar