import styles from './ProjectsList.module.scss'
import { projects } from '../../database/projects'
import ProjectItem from '../ProjectItem/ProjectItem'
import { Link } from 'react-router-dom'

const ProjectsList = () => {
  return (
    <section className='container'>
      <h2>Our projects</h2>
      <div className={styles.projects}>
        { projects.map(project => 
         <Link to={`/projects/${project.link}`}>
            <ProjectItem key={project.id} project={project} />
          </Link>
        ) }
      </div>
    </section>
  )
}

export default ProjectsList