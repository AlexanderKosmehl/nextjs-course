import styles from './EventLogistics.module.css'
import AddressIcon from "../../Icons/AddressIcon"
import DateIcon from "../../Icons/DateIcon"
import LogisticsItem from "../LogisticsItem/LogisticsItem"
import { Event } from "../../../types/Event"

interface EventLogisticsProps {
  event: Event
}

export default function EventLogistics({ event }: EventLogisticsProps) {
  // const { date, address, image, imageAlt } = props

  const humanReadableDate = new Date(event.date).toLocaleDateString('de-De', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const addressText = event.location.replace(', ', '\n')

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${event.image}`} alt={event.title}/>
      </div>
      <ul className={styles.list}>
        <LogisticsItem iconComponent={<DateIcon/>}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem iconComponent={<AddressIcon/>}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  )
}
