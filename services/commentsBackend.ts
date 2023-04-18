import { Comment } from '../types/Comment'

const comments: Comment[] = [
  {
    id: 'dummy1',
    eventId: 'e1',
    name: 'Max',
    email: 'test@test.de,',
    text: 'This course is great!',
  },
  {
    id: 'dummy2',
    eventId: 'e1',
    name: 'Max',
    email: 'test@test.de,',
    text: 'I love this course!',
  },
  {
    id: 'dummy3',
    eventId: 'e2',
    name: 'Max',
    email: 'test@test.de,',
    text: 'I love this course!',
  },
  {
    id: 'dummy4',
    eventId: 'e3',
    name: 'Max',
    email: 'test@test.de,',
    text: 'I love this course!',
  },
]

export const getCommentsForEvent = (eventId: string) => {
  return comments.filter((comment) => comment.eventId === eventId)
}

type CommentWithoutId = Omit<Comment, 'id'>

export const addComment = (comment: CommentWithoutId) => {
  const newComment: Comment = {
    id: new Date().toISOString(),
    ...comment,
  }

  comments.push(newComment)

  return newComment
}

export const deleteComment = (id: string) => {
  const commentIdx = comments.findIndex((comment) => comment.id === id)

  if (commentIdx === -1) return undefined

  return comments.splice(commentIdx, 1)[0]
}
