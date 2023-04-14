import { ReactNode } from 'react'
import styles from './ErrorAlert.module.css'

interface ErrorAlertProps {
  children: ReactNode
}

export default function ErrorAlert({ children }: ErrorAlertProps) {
  return <div className={styles.alert}>{children}</div>
}
