import Button from '../Button/Button'
import Slider from '../Slider/Slider'
import styles from './Intro.module.scss'
import { projects } from '../../database/projects'
import { useState } from 'react'
import Counter from '../Counter/Counter'
import Switcher from '../Switcher/Switcher'
import { Link } from 'react-router-dom'
import { motion as m } from "framer-motion"

const Intro = () => {
  const [slide, setSlide] = useState(0)
  const newSlide = (index: number) => setSlide(index)

  return (
    <div className={`container ${styles.intro}`}>
      <div className={styles.intro_left}>
        <m.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className={styles.intro_title}>
          <h2>innovate</h2>
          <h1>tech</h1>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
          className={styles.counter}>
          <div className={styles.switcher}>
            <Switcher newSlide={newSlide} />
            <span />
          </div>
          <div>
            <Counter currentIndex={slide} total={projects.length} />
          </div>
        </m.div>
      </div>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, duration: 2, ease: "easeOut" }}
        className={styles.intro_slider}>
        <Slider projects={projects} index={slide} />
        <div className={styles.btn}>
          <Link to={`/projects/${projects[slide].link}`} className={styles.background}>
            <Button name='take a look' light={true} />
          </Link>
        </div>
      </m.div>
    </div>
  )
}

export default Intro