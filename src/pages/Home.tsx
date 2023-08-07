import Intro from "../components/Intro/Intro"
import About from "../components/About/About"
import Objective from "../components/Objective/Objective"
import { projects } from '../database/projects'
import GaleryImg from "../components/GaleryImg/GaleryImg"
import ContactUs from "../components/ContactUs/ContactUs"

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <Objective />
      <GaleryImg projects={projects}/>
      <ContactUs />
    </div>
  )
}

export default Home