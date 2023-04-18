interface NewsletterSubscriber {
  id: string
  email: string
}

const newsletterEntries: NewsletterSubscriber[] = []

export const addSubscriber = (email: string) => {
  if (newsletterEntries.some((entry) => entry.email === email)) return undefined

  const newEntry = {
    id: new Date().toISOString(),
    email,
  }

  newsletterEntries.push(newEntry)
  console.log(newsletterEntries)

  return newEntry
}

export const unsubscribe = (email: string) => {
  const subscriberIdx = newsletterEntries.findIndex(
    (entry) => entry.email === email
  )

  if (subscriberIdx === -1) return undefined

  return newsletterEntries.splice(subscriberIdx, 1)[0]
}
