interface IProjects {
  id: number,
  title: string,
  slide: string
}

interface SlidersProps {
  projects: IProjects[],
  index: number,
}

const Sliders = ( { projects, index }: SlidersProps) => {
  const slideStyle = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${projects[index].slide})`,
    transition: 'ease-out 0.4s'
  }

  return (
    <div style={slideStyle}></div>
  )
}

export default Sliders