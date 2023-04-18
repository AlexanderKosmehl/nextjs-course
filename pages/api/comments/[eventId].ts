import { NextApiRequest, NextApiResponse } from 'next'
import { HTTPMethods } from '../../../types/HTTPMethods'
import { addComment, getCommentsForEvent } from '../../../services/commentsBackend'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.method) {
    res.status(400)
    return
  }

  const eventId = req.query.eventId as string

  switch (req.method) {
    case HTTPMethods.Post: {
      const { email, name, text } = req.body

      if (
        !email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !text ||
        text.trim() === ''
      ) {
        res.status(400).json({ message: 'Invalid input.' })
        return
      }

      const newComment = addComment({ email, name, text, eventId })

      res.status(201).json({ message: 'Added comment.', comment: newComment })
      return
    }

    case HTTPMethods.Get: {
      const comments = getCommentsForEvent(eventId)
      res.status(200).send({ comments })
      return
    }

    default: {
      res.status(405)
    }
  }
}
