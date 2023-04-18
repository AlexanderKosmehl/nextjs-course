import { useEffect, useState } from 'react'
import styles from './Comments.module.css'
import { CommentList } from '../CommentList/CommentList'
import { NewComment } from '../NewComment/NewComment'
import { HTTPMethods } from '../../../types/HTTPMethods'
import { Comment } from '../../../types/Comment'
import { API_BASE } from '../../../services/fetcher'

interface CommentsProps {
  eventId: string
}

export const Comments = ({ eventId }: CommentsProps) => {
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus)
  }

  useEffect(() => {
    if (!showComments) return

    fetch(`${API_BASE}/comments/${eventId}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments))
  }, [showComments, eventId])

  const addCommentHandler = (commentData: {
    email: string
    name: string
    text: string
  }) => {
    fetch(`${API_BASE}/comments/${eventId}`, {
      method: HTTPMethods.Post,
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  )
}
