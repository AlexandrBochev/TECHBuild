import styles from './ObjectiveArticle.module.scss'

interface ObjectiveArticleProps {
  id: number,
  article: string,
}

const ObjectiveArticle = ({ id, article }: ObjectiveArticleProps ) => {
  return (
    <div className={styles.container}>
      <div className={styles.id}>{id}</div>
      <div className={styles.article}>{article}</div>
    </div>
  )
}

export default ObjectiveArticle