import Link from 'next/link'
import styles from './EventItem.module.css'
import Button from '../../ui/Button/Button'
import DateIcon from '../../Icons/DateIcon'
import AddressIcon from '../../Icons/AddressIcon'
import ArrowRightIcon from '../../Icons/ArrowRightIcon'
import { Event } from "../../../types/Event"
import Image from 'next/image'

interface EventItemProps {
  event: Event
}

export const EventItem = ({ event }: EventItemProps) => {
  const readableDate = new Date(event.date).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <li className={styles.item}>
      <Image src={'/' + event.image} alt={event.title} width={250} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{event.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{event.location}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${event.id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}
