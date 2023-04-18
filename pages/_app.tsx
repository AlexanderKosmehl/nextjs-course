import { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import { NotificationContextProvider } from "../store/notificationContext"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  )
}
