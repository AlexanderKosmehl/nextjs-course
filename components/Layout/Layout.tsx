import { ReactNode } from 'react'
import MainHeader from './MainHeader/MainHeader'
import { Notification } from "../ui/Notification/Notification"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Notification />
    </>
  )
}
