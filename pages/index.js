import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import HomeSection from '../components/home/HomeSection'
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
      <Box py={["10rem", "10rem", "10rem", "0", "0"]}><HomeSection /></Box>
    </div>
  )
}
