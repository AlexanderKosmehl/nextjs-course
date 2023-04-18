import { FormEvent, useContext, useRef } from 'react'
import styles from './NewsletterRegistration.module.css'
import { HTTPMethods } from '../../../types/HTTPMethods'
import { notificationContext } from "../../../store/notificationContext"
import { NotificationStatus } from "../../ui/Notification/Notification"

export const NewsletterRegistration = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const { showNotification } = useContext(notificationContext)
  
  const registrationHandler = (event: FormEvent) => {
    event.preventDefault()
    
    const email = emailInputRef.current?.value
    if (!email) return
    
    showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter...',
      status: NotificationStatus.Pending
    })
    
    fetch('/api/newsletter', {
      method: HTTPMethods.Post,
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.ok) return response.json()
      
      response.json().then(data => {
        throw new Error(data.message || 'Something went wrong!')
      })
    })
    .then((data) => {
      showNotification({
        title: 'Success!',
        message: 'Successfully registered for newsletter!',
        status: NotificationStatus.Success
      })
    })
    .catch((error) => {
      showNotification({
        title: 'Error!',
        message: error.message || 'Something went wrong!',
        status: NotificationStatus.Error
      })
    })
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
