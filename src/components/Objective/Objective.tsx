import { objectiveArticles } from '../../database/objective'
import styles from './Objective.module.scss'
import { motion as m } from "framer-motion"

const Objective = () => {

  return (
    <section className='container'>
      <m.h2
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className={styles.title}>objective
      </m.h2>
      <div className={styles.objective}>
        <m.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className={styles.block}>
          <div className={styles.id}>{objectiveArticles[0].id}</div>
          <div className={styles.article}>{objectiveArticles[0].article}</div>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className={styles.block}>
          <div className={styles.id}>{objectiveArticles[1].id}</div>
          <div className={styles.article}>{objectiveArticles[1].article}</div>
        </m.div>
      </div>
    </section>
  )
}

export default Objective