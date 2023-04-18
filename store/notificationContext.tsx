import { createContext, ReactNode, useEffect, useState } from "react"
import { NotificationStatus } from "../components/ui/Notification/Notification"

interface NotificationItem {
  title: string,
  message: string,
  status: NotificationStatus
}

interface NotificationContextContent {
  notification?: NotificationItem,
  showNotification: (notification: NotificationItem) => void,
  hideNotification: () => void
}

export const notificationContext = createContext<NotificationContextContent>({
  notification: undefined,
  showNotification: (notification: NotificationItem) => {},
  hideNotification: () => {}
})

interface NotificationContextProviderProps {
  children: ReactNode
}

export const NotificationContextProvider = ({ children }: NotificationContextProviderProps) => {
  const [notification, setNotification] = useState<NotificationItem>()
  
  useEffect(() => {
    if (notification && (notification.status === NotificationStatus.Success || notification.status === NotificationStatus.Error)) {
      const timer = setTimeout(() => {
        hideNotificationHandler()
      }, 3000)
      
      return () => {
        clearTimeout(timer)
      }
    }
  }, [notification])
  
  const showNotificationHandler = (notification: NotificationItem) => {
    setNotification(notification)
  }
  
  const hideNotificationHandler = () => {
    setNotification(undefined)
  }
  
  return (
    <notificationContext.Provider
      value={{ notification, showNotification: showNotificationHandler, hideNotification: hideNotificationHandler }}>
      {children}
    </notificationContext.Provider>
  )
}