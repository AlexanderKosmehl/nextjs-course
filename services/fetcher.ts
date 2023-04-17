import { Event } from "../types/Event"

export const fetcher = (url: string) => fetch(url).then(res => res.json())

export const getAllEvents = async () => {
  const data = await fetch('http://localhost:3000/data/data.json')
  return await data.json() as Event[]
}

export const getFeaturedEvents = async () => {
  const events = await getAllEvents()
  return events.filter((event) => event.isFeatured)
}

export const getEventById = async (id: string) => {
  const events = await getAllEvents()
  return events.find(event => event.id === id)
}

export const getFilteredEvent =
  async (dataFilter: { year: number, month: number }) => {
    const events = await getAllEvents()
    return events.filter((event) => {
      const eventDate = new Date(event.date)
      return (eventDate.getFullYear() === dataFilter.year && eventDate.getMonth() === dataFilter.month - 1)
    })
  }