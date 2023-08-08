import styles from './ProjectsList.module.scss'
import { projects } from '../../database/projects'
import ProjectItem from '../ProjectItem/ProjectItem'
import { Link } from 'react-router-dom'
import { motion as m } from "framer-motion"

const ProjectsList = () => {
  return (
    <section className='container'>
      <m.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}>
        Our projects
      </m.h2>
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