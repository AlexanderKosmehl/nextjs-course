import { EventList } from '../components/events/EventList/EventList'
import { getFeaturedEvents } from '../data/dummy-data'

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  )
}
