import Button from '../../ui/Button/Button'
import styles from './ResultsTitle.module.css'

interface ResultsTitleProps {
  date: Date
}

export default function ResultsTitle({ date }: ResultsTitleProps) {
  const humanReadableDate = date.toLocaleDateString('de-DE', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  )
}
