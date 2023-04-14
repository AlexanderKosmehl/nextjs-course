import styles from './EventSummary.module.css'

interface EventSummaryProps {
  title: string
}

export default function EventSummary({ title }: EventSummaryProps) {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  )
}
