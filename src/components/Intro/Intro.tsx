import Button from '../Button/Button'
import Slider from '../Slider/Slider'
import styles from './Intro.module.scss'
import { projects } from '../../database/projects'
import { useState } from 'react'
import Counter from '../Counter/Counter'
import Switcher from '../Switcher/Switcher'
import { Link } from 'react-router-dom'

const Intro = () => {
  const [slide, setSlide] = useState(0)
  const newSlide = (index: number) => setSlide(index)

  return (
    <div className={`container ${styles.intro}`}>
      <div className={styles.intro_left}>
        <div className={styles.intro_title}>
          <h2>innovate</h2>
          <h1>tech</h1>
        </div>
        <div className={styles.counter}>
          <div className={styles.switcher}>
            <Switcher newSlide={newSlide} />
            <span />
          </div>
          <div>
            <Counter currentIndex={slide} total={projects.length} />
          </div>
        </div>
      </div>
      <div className={styles.intro_slider}>
        <Slider projects={projects} index={slide} />
        <div className={styles.btn}>
          <Link to={`/projects/${projects[slide].link}`} className={styles.background}>
            <Button name='take a look' light={true} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Intro