import { ReactNode } from 'react'
import styles from './LogisticsItem.module.css'

interface LogisticsItem {
  children: ReactNode
  iconComponent: ReactNode
}

function LogisticsItem({ children, iconComponent }: LogisticsItem) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>{iconComponent}</span>
      <span className={styles.content}>{children}</span>
    </li>
  )
}

export default LogisticsItem
