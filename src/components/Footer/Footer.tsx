import { Link } from 'react-router-dom';
import LogoSvg from '../SVG/LogoSvg'
import Location from '../SVG/Location'
import { navItems } from '../../database/navItems'
import styles from './Footer.module.scss'
import Phone from '../SVG/Phone'
import Mail from '../SVG/Mail'
import Facebook from '../SVG/Facebook'
import Twitter from '../SVG/Twitter'
import LinkedIn from '../SVG/LinkedIn'
import Pinterest from '../SVG/Pinterest'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.wrap}>
            <div className={styles.logo}>
              <Link to="/"><LogoSvg /></Link>
            </div>

            <div className={styles.info}>
              <p className={styles.title}>Information</p>
              <div className={styles.info_items}>
                { navItems.map(item => <Link to={item.link}><p key={item.id}>{item.name}</p></Link>) }
              </div>
            </div>
          </div>
          
          <div className={styles.wrap}>
            <div className={styles.contacts}>
              <p className={styles.title}>Contacts</p>
              <div className={styles.contacts_items}>  
                <div className={styles.contacts_item}>
                  <Location />
                  <a href="https://www.google.com/maps/place/Всемирный+торговый+центр+1,+285+Fulton+St,+New+York,+NY+10007,+Соединенные+Штаты/@40.7129947,-74.0131609,15z/data=!4m6!3m5!1s0x89c25a197c06b7cb:0x40a06c78f79e5de6!8m2!3d40.7127431!4d-74.0133795!16zL20vMGN6YzFo" target='_blank'>
                    <p>One World Trade Center<br />285 Fulton St, New York, NY 10007, USA</p>
                  </a>
                </div>
                <div className={styles.contacts_item}>
                  <Phone />
                  <a href="tel:+18446961776" target='_self'>
                    <p>+18446961776</p>
                  </a>
                </div>
                <div className={styles.contacts_item}>
                  <Mail />
                  <a href="mailto:info@techbuild.com">
                    <p>info@techbuild.com</p>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <p className={styles.title}>Social media</p>
              <div className={styles.social_items}>
                <a href="https://www.facebook.com" target='_blank'><Facebook /></a>
                <a href="https://twitter.com" target='_blank'><Twitter /></a>
                <a href="https://www.linkedin.com" target='_blank'><LinkedIn /></a>
                <a href="https://pinterest.com" target='_blank'><Pinterest /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className={styles.line}></span>
      <p className={styles.bottom_txt}>© 2019 Digital Project. All rights reserved.</p>
    </footer>
  )
}

export default Footer