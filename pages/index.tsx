import { EventList } from '../components/Events/EventList/EventList'
import { useEffect, useState } from "react"
import useSWR from 'swr'
import { fetcher, getFeaturedEvents } from "../services/fetcher"
import { GetStaticProps } from "next"
import { Event } from "../types/Event"

interface HomePageProps {
  initialEvents: Event[]
}

export default function HomePage({ initialEvents }: HomePageProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const featuredEvents = events.filter(event => event.isFeatured)

  const { data } = useSWR<Event[]>('/data/data.json', fetcher)

  useEffect(() => {
    if (!data) return

    setEvents(data)
  }, [data])

  return (
    <div>
      <EventList events={featuredEvents}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const initialEvents = await getFeaturedEvents()

  return {
    props: {
      initialEvents
    },
    revalidate: 1800
  }
}