import { useContext } from "react"
import styles from './Notification.module.css'
import { notificationContext } from "../../../store/notificationContext"

export enum NotificationStatus {
  Success,
  Error,
  Pending
}

export const Notification = () => {
  const { notification, hideNotification } = useContext(notificationContext)
  
  if (!notification) return null
  
  let statusClasses = ''
  
  if (notification.status === NotificationStatus.Success) {
    statusClasses = styles.success
  }
  
  if (notification.status === NotificationStatus.Error) {
    statusClasses = styles.error
  }
  
  if (notification.status === NotificationStatus.Pending) {
    statusClasses = styles.pending
  }
  
  const activeClasses = `${styles.notification} ${statusClasses}`
  
  
  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2>{notification.title}</h2>
      <p>{notification.message}</p>
    </div>
  )
}