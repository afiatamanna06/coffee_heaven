import Head from 'next/head'
import NavigationBar from '../components/navigation/NavigationBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Heaven</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavigationBar />
    </div>
  )
}
