import { Comment } from '../../../types/Comment'
import styles from './CommentList.module.css'

interface CommentListProps {
  comments: Comment[]
}

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <ul className={styles.comments}>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
