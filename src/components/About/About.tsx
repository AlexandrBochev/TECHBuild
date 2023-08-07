import Button from '../Button/Button'
import styles from './About.module.scss'
import { about } from '../../database/about'
import { motion as m } from "framer-motion"

const About = () => {
  return (
    <div className='container'>
      <section className={styles.about}>
          <m.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className={styles.article}>
            <h2>{about.title}</h2>
            <p>{about.article}</p>
            <Button name='read more' light={true} />
          </m.div>
          <m.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className={styles.gallery}>
            {about.photos.map((photo, id) => <img key={id} src={photo.name} alt='building' />)}
          </m.div>
      </section>
    </div>
  )
}

export default About