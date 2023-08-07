import styles from './GaleryImg.module.scss'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

interface IProjects {
  id: number
  link: string
  title: string
  slide: string
}

const GaleryImg = ({ projects }: { projects: IProjects[] }) => {

  return (
    <section className='container'>
      <h2>Our projects</h2>
      <div className={styles.wrapper}>
        <div className={styles.slides}>
          <div className={styles.row1}>
            <Link to={`/projects/${projects[0].link}`} className={styles.background}>
              <p>{projects[0].title}</p>
              <Button name='LEARN MORE' background={false} />
            </Link>
            <img src={projects[0].slide} alt="slide1" />
          </div>
          <div className={styles.row1}>
            <Link to={`/projects/${projects[1].link}`} className={styles.background}>
              <p>{projects[1].title}</p>
              <Button name='LEARN MORE' background={false} />
            </Link>
            <img src={projects[1].slide} alt="slide2" />
          </div>
          <div className={styles.row2}>
            <Link to={`/projects/${projects[2].link}`} className={styles.background}>
              <p>{projects[2].title}</p>
              <Button name='LEARN MORE' background={false} />
            </Link>
            <img src={projects[2].slide} alt="slide3" />
          </div>
          <div className={styles.row2}>
            <Link to={`/projects/${projects[3].link}`} className={styles.background}>
              <p>{projects[3].title}</p>
              <Button name='LEARN MORE' background={false} />
            </Link>
            <img src={projects[3].slide} alt="slide4" />
          </div>
          <div className={styles.row2}>
            <Link to={`/projects/${projects[4].link}`} className={styles.background}>
              <p>{projects[4].title}</p>
              <Button name='LEARN MORE' background={false} />
            </Link>
            <img src={projects[4].slide} alt="slide5" />
          </div>
        </div>
        <Link to='/projects'><Button name='all projects'/></Link>
      </div>
    </section>
  )
}

export default GaleryImg