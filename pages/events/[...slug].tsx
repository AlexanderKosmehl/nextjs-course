import { useRouter } from 'next/router'
import { EventList } from '../../components/Events/EventList/EventList'
import ResultsTitle from '../../components/Events/ResultsTitle/ResultsTitle'
import Button from '../../components/ui/Button/Button'
import ErrorAlert from '../../components/ui/ErrorAlert/ErrorAlert'
import { GetServerSideProps } from "next"
import { Event } from "../../types/Event"
import { getFilteredEvent } from "../../services/fetcher"

interface FilteredEventPageProps {
  filteredEvents: Event[]
  hasError: boolean
  filterSettings: {
    year: number
    month: number
  }
}

export default function FilteredEventPage({ filteredEvents, hasError, filterSettings }: FilteredEventPageProps) {
  // if (!filteredEvents) {
  //   return <p className="center">Loading...</p>
  // }

  if (hasError) {
    return (
      <>
        <ErrorAlert>Invalid filter. Please adjust your values!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    )
  }

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
      <ResultsTitle date={new Date(filterSettings.year, filterSettings.month)}/>
      <EventList events={filteredEvents}/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string[] }

  const year = Number(slug?.[0]) || 2022
  const month = Number(slug?.[1]) || 2022

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2000 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        filteredEvents: [],
        hasError: true,
        filterSettings: {
          year,
          month
        }
      }
    }
  }

  const filteredEvents = await getFilteredEvent({ year, month })

  return {
    props: {
      filteredEvents,
      hasError: false,
      filterSettings: {
        year,
        month
      }
    }
  }
}
