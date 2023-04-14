import { DummyEvent } from '../../data/dummy-data'
import AddressIcon from '../icons/AddressIcon'
import DateIcon from '../icons/DateIcon'
import LogisticsItem from './LogisticsItem'
import classes from './EventLogistics.module.css'

interface EventLogisticsProps {
  event: DummyEvent
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
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${event.image}`} alt={event.title} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem iconComponent={<DateIcon />}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem iconComponent={<AddressIcon />}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  )
}
