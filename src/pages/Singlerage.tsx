import { useParams } from "react-router-dom"
import { projects } from '../database/projects'
import ProjectItem from "../components/ProjectItem/ProjectItem"

const Project = () => {
  const {link} = useParams()
  let project = {}
  let title = ''

  for (const oject of projects) {
    if (oject.link === link) {
      project = oject
      title = oject.title
    }
  }

  return (
    <div className="container">
      {/* <h2 style={{fontSize: '3rem'}}>{title}</h2> */}
      <div style={{margin: '2rem 0'}}>
        <ProjectItem project={project} />
      </div>
    </div>
  )
}

export default Project