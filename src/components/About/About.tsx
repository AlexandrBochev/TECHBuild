import Button from '../Button/Button'
import styles from './About.module.scss'
import { about } from '../../database/about'
import { motion as m } from "framer-motion"
import { Link } from 'react-router-dom'

const About = ({ btn = true }: { btn?: boolean }) => {
  return (
    <div className='container'>
      <section className={styles.about}>
          <div className={styles.article}>
            <m.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}>
              {about.title}
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}>
              {about.article}
            </m.p>
            { btn && <m.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}>
              <Link to='/about'><Button name='read more' light={true} /></Link>
            </m.div> }
          </div>
          <m.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            className={styles.gallery}>
            {about.photos.map((photo, id) => <img key={id} src={photo.name} alt='building' />)}
          </m.div>
      </section>
    </div>
  )
}

export default About