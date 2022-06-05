import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import AboutSection from '../components/about/AboutSection'
import FacilitiesSection from '../components/about/FacilitiesSection'
import ContactSection from '../components/contact/ContactSection'
import GallerySection from '../components/gallery/GallerySection'
import HomeSection from '../components/home/HomeSection'
import MenuSection from '../components/menu/MenuSection'
import NavigationBar from '../components/navigation/NavigationBar'
import TeamSection from '../components/team/TeamSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Heaven</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Box>
        <NavigationBar />
        <Box><HomeSection /></Box>
        <Box bg={["none", "none", "none", "white", "white"]}><AboutSection /></Box>
        <Box bg={["rgba(255, 255, 255, .3)"]}><FacilitiesSection /></Box>
        <Box bg={["white"]}><MenuSection /></Box>
        <Box bg={["rgba(255, 204, 153, .45)"]}><GallerySection /></Box>
        <Box bg={["rgba(190, 156, 121, .55)"]}><TeamSection /></Box>
        <Box bg={["rgba(255, 255, 255, .3)"]}><ContactSection /></Box>
      </Box>
    </div>
  )
}
