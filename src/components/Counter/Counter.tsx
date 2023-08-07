import styles from './Counter.module.scss'
interface CounterProps {
  currentIndex: number,
  total: number,
}

const Counter = ({currentIndex, total}: CounterProps) => {
  return (
    <div className={styles.counter}>
      <p>{`0${currentIndex + 1}`}</p>
      <div className={styles.slash} />
      <p>{`0${total}`}</p>
    </div>
  )
}

export default Counter