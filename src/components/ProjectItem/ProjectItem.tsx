import styles from './ProjectItem.module.scss'

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
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
      </div>
      <div className={styles.image}>
        <img src={project.slide} alt="Photo" />
      </div>
    </div>
  )
}

export default ProjectItem