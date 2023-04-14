import { useRouter } from 'next/router'
import { EventList } from '../../components/Events/EventList/EventList'
import EventSearch from '../../components/Events/EventSearch/EventSearch'
import { getAllEvents } from '../../data/dummy-data'

export default function EventListPage() {
  const allEvents = getAllEvents()
  const router = useRouter()

  const findEventsHandler = (year: number, month: number) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={allEvents} />
    </>
  )
}
