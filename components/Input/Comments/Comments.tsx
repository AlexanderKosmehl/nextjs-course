import { useState } from 'react'
import styles from './Comments.module.css'
import { CommentList } from '../CommentList/CommentList'
import { NewComment } from '../NewComment/NewComment'

interface CommentsProps {
  eventId: string
}

export const Comments = ({ eventId }: CommentsProps) => {
  const [showComments, setShowComments] = useState(false)

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus)
  }

  const addCommentHandler = (commentData: {
    email: string
    name: string
    text: string
  }) => {
    // send data to API
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  )
}
