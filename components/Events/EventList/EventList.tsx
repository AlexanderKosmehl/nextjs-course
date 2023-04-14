import { DummyEvent } from '../../../data/dummy-data'
import { EventItem } from '../EventItem/EventItem'
import styles from './EventList.module.css'

interface EventListProps {
  events: DummyEvent[]
}

export const EventList = ({ events }: EventListProps) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  )
}
