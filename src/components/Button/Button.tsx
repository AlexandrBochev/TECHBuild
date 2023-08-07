import styles from './Button.module.scss'
import Arrow from '../SVG/ArrowSvg'

interface ButtonProps {
  name?: string,
  light?: boolean
  left?: boolean
  background?: boolean
}

const Button = ({ name = '', light = false, left = false, background = true }: ButtonProps) => {

  let btnStyle = `
    ${styles.btn}
    ${!name.length ? styles.sm_btn : styles.lg_btn}
    ${light ? styles.light_btn : styles.dark_btn}
    ${left ? styles.left : ''}
    ${!background ? styles.no_background : ''}
  `
  return (
    <button className={btnStyle}>
      <div className={styles.items}>
        <div className={styles.name}>{name}</div>
        <div className={styles.arrow}>
          <Arrow left={left}/>
        </div>
      </div>
    </button>
  )
}

export default Button