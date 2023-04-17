import { EventItem } from '../EventItem/EventItem'
import styles from './EventList.module.css'
import { Event } from "../../../types/Event"

interface EventListProps {
  events: Event[]
}

export const EventList = ({ events }: EventListProps) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event}/>
      ))}
    </ul>
  )
}
