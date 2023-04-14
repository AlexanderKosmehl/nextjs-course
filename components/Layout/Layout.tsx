import { ReactNode } from 'react'
import MainHeader from './MainHeader/MainHeader'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  )
}
