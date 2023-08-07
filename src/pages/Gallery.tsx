import GaleryImg from "../components/GaleryImg/GaleryImg"
import { projects } from '../database/projects'

const Gallery = () => {

  return (
    <div>
      <GaleryImg projects={projects}/>
    </div>
  )
}

export default Gallery