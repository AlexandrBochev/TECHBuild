import { objectiveArticles } from '../../database/objective'
import styles from './Objective.module.scss'

const Objective = () => {

  return (
    <section className='container'>
      <h2 className={styles.title}>objective</h2>
      <div className={styles.objective}>
        <div className={styles.block}>
          <div className={styles.id}>{objectiveArticles[0].id}</div>
          <div className={styles.article}>{objectiveArticles[0].article}</div>
        </div>
        <div className={styles.block}>
          <div className={styles.id}>{objectiveArticles[1].id}</div>
          <div className={styles.article}>{objectiveArticles[1].article}</div>
        </div>
      </div>
    </section>
  )
}

export default Objective