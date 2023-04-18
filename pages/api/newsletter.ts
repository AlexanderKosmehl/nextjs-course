import { NextApiRequest, NextApiResponse } from 'next'
import { HTTPMethods } from '../../types/HTTPMethods'
import { addSubscriber } from '../../services/newsletterBackend'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.method) {
    res.status(400)
    return
  }

  switch (req.method) {
    case HTTPMethods.Post: {
      const userEmail = req.body.email

      if (!userEmail || !userEmail.includes('@')) {
        res.status(422).json({ message: 'Invalid email address.' })
        return
      }

      const newSubscriber = addSubscriber(userEmail)

      if (!newSubscriber) {
        res.status(400).json({ message: 'Email is already subscribed!'})
        return
      }

      res.status(201).json({ message: 'Signed up!' })
      return
    }

    default: {
      res.status(405)
    }
  }
}
