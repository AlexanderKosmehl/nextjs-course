import styles from './CommentList.module.css'

export const CommentList = () => {
  return (
    <ul className={styles.comments}>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  )
}
