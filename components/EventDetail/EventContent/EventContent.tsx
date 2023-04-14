import { ReactNode } from 'react'
import styles from './EventContent.module.css'

interface EventContentProps {
  children: ReactNode
}

export default function EventContent({ children }: EventContentProps) {
  return <section className={styles.content}>{children}</section>
}
