import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  link?: string
  onClick?: () => void
  children: ReactNode
}

export default function Button({ link, onClick, children }: ButtonProps) {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    )
  }

  return (
    <button type='button' className={styles.btn} onClick={onClick}>
      {children}
    </button>
  )
}
