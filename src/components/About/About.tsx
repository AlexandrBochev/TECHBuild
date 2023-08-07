import Button from '../Button/Button'
import styles from './About.module.scss'
import { about } from '../../database/about';

const About = () => {
  return (
    <div className='container'>
      <section className={styles.about}>
          <div className={styles.article}>
            <h2>{about.title}</h2>
            <p>{about.article}</p>
            <Button name='read more' light={true} />
          </div>
          <div className={styles.gallery}>
            {about.photos.map((photo, id) => <img key={id} src={photo.name} alt='building' />)}
          </div>
      </section>
    </div>
  )
}

export default About