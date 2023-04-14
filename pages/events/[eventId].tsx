import { useRouter } from 'next/router'
import { getEventById } from '../../data/dummy-data'
import EventSummary from '../../components/EventDetail/EventSummary'
import EventLogistics from '../../components/EventDetail/EventLogistics'
import EventContent from '../../components/EventDetail/EventContent'

export default function EventDetailPage() {
  const router = useRouter()
  const eventId = router.query.eventId as string
  const event = getEventById(eventId)

  if (!event) {
    return <p>No event found!</p>
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}
