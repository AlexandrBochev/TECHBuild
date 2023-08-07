import Button from "../Button/Button"
import { projects } from '../../database/projects'
import { useState } from "react"

interface SwitcherProps {
  newSlide: (index: number) => void
}

const Switcher = ({ newSlide }: SwitcherProps) => {
  const [currentIndex, setCurrentIndex] = useState(1)

  const handlePrev = () => {
    const isFirstIndex = currentIndex === 0
    const newIndex = isFirstIndex ? projects.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    newSlide(currentIndex)
  }

  const handleNext = () => {
    const isLastIndex = currentIndex === projects.length - 1
    const newIndex = isLastIndex ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    newSlide(currentIndex)
  }

  return (
    <div style={{display: 'flex', alignItems: 'center',}}>
      <div style={{marginRight: '1.4rem'}} onClick={handlePrev}>
        <Button light={true} left={true} />
      </div>
      <div onClick={handleNext}>
        <Button light={true} />
      </div>
    </div>
  )
}

export default Switcher