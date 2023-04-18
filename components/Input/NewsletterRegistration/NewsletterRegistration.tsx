import { FormEvent } from 'react'
import styles from './NewsletterRegistration.module.css'

export const NewsletterRegistration = () => {
  const registrationHandler = (event: FormEvent) => {
    event.preventDefault()
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
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  )
}
