import { objectiveArticles } from '../../database/objective'
import styles from './Objective.module.scss'
import { motion as m } from "framer-motion"

const Objective = () => {

  return (
    <section className='container'>
      <m.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}>
        objective
      </m.h2>
      <div className={styles.objective}>
        <m.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className={styles.block}>
          <div className={styles.id}>{objectiveArticles[0].id}</div>
          <div className={styles.article}>{objectiveArticles[0].article}</div>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className={styles.block}>
          <div className={styles.id}>{objectiveArticles[1].id}</div>
          <div className={styles.article}>{objectiveArticles[1].article}</div>
        </m.div>
      </div>
    </section>
  )
}

export default Objective