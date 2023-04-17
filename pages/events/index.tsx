import { useRouter } from 'next/router'
import { EventList } from '../../components/Events/EventList/EventList'
import EventSearch from '../../components/Events/EventSearch/EventSearch'
import { useEffect, useState } from "react"
import useSWR from "swr"
import { fetcher, getAllEvents } from "../../services/fetcher"
import { GetStaticProps } from "next"
import { Event } from "../../types/Event"

interface EventListPageProps {
  initialEvents: Event[]
}

export default function EventListPage({ initialEvents }: EventListPageProps) {
  const router = useRouter()

  const [events, setEvents] = useState<Event[]>(initialEvents)

  const { data } = useSWR<Event[]>('/data/data.json', fetcher)

  useEffect(() => {
    if (!data) return

    setEvents(data)
  }, [data])

  const findEventsHandler = (year: number, month: number) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList events={events}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const initialEvents = await getAllEvents()

  return {
    props: {
      initialEvents
    },
    revalidate: 1800
  }
}
