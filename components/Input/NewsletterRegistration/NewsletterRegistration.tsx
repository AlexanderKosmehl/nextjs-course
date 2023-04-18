import { FormEvent, useRef } from 'react'
import styles from './NewsletterRegistration.module.css'
import { HTTPMethods } from '../../../types/HTTPMethods'

export const NewsletterRegistration = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)

  const registrationHandler = (event: FormEvent) => {
    event.preventDefault()

    const email = emailInputRef.current?.value
    if (!email) return

    fetch('/api/newsletter', {
      method: HTTPMethods.Post,
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  )
}
