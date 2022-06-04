import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import AboutSection from '../components/about/AboutSection'
import FacilitiesSection from '../components/about/FacilitiesSection'
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
      <Box><HomeSection /></Box>
      <Box bg={["none", "none", "none", "white", "white"]}><AboutSection /></Box>
      <FacilitiesSection />
    </div>
  )
}
