import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../data/dummy-data'
import { EventList } from '../../components/Events/EventList/EventList'
import ResultsTitle from '../../components/Events/ResultsTitle/ResultsTitle'
import Button from '../../components/ui/Button/Button'
import ErrorAlert from '../../components/ui/ErrorAlert/ErrorAlert'

export default function FilteredEventPage() {
  const router = useRouter()
  const filterData = router.query.slug

  if (!filterData) {
    return <p className="center">Loading...</p>
  }

  const year = Number(filterData?.[0]) || 2022
  const month = Number(filterData?.[1]) || 2022

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2000 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <>
        <ErrorAlert>Invalid filter. Please adjust your values!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({ year, month })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No results found for the selected filter</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    )
  }

  return (
    <div>
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList events={filteredEvents} />
    </div>
  )
}
