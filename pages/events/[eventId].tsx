import { useRouter } from 'next/router'
import EventSummary from '../../components/EventDetail/EventSummary/EventSummary'
import EventLogistics from '../../components/EventDetail/EventLogistics/EventLogistics'
import EventContent from '../../components/EventDetail/EventContent/EventContent'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getEventById, getFeaturedEvents } from '../../services/fetcher'

import { Event } from '../../types/Event'
import Head from 'next/head'

interface EventDetailsPageProps {
  event: Event
}

export default function EventDetailPage({ event }: EventDetailsPageProps) {
  const router = useRouter()

  if (!event)
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    )

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const events = await getFeaturedEvents()
  const paths = events.map((event) => ({ params: { eventId: event.id } }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { eventId } = context.params as { eventId: string }
  const event = await getEventById(eventId)

  if (!event) return { notFound: true }

  return {
    props: {
      event,
    },
  }
}
