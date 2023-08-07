import styles from './Burger.module.scss'

const Burger = ({ isClicked }: { isClicked: boolean} ) => {

  const burgerClicked = isClicked ? styles.clicked : styles.unclicked

  return (
    <div className={styles.burger}>
      <span className={`${styles.burgder_bar} ${burgerClicked}`}></span>
      <span className={`${styles.burgder_bar} ${burgerClicked}`}></span>
      <span className={`${styles.burgder_bar} ${burgerClicked}`}></span>
    </div>
  )
}

export default Burger