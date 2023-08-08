import styles from './ProjectItem.module.scss'
import { motion as m } from "framer-motion"

interface IProjects {
  id?: number
  link?: string
  title?: string
  description?: string
  slide?: string
}

const ProjectItem = ({ project }: { project: IProjects }) => {
  return (
    <div className={styles.project}>
      <div className={styles.article}>
        <m.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
          className={styles.title}>
          {project.title}
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
          className={styles.description}>
          {project.description}
        </m.p>
      </div>
      <m.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className={styles.image}>
        <img src={project.slide} alt="Photo" />
      </m.div>
    </div>
  )
}

export default ProjectItem