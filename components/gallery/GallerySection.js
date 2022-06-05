import { Flex, Center, Grid, Image } from '@chakra-ui/react'
import Header from '../common/Header'
import galleryData from './GalleryData'

function GallerySection() {
  return (
    <Flex as={Center} flexDir="column" py="16" px="4" id="Gallery">
        <Header title="Our Gallery" color={["rgba(255, 255, 255, 1)"]} />
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} alignItems="center" maxW="80rem" mt="2" columnGap={["3"]} rowGap={["3"]}>
          {galleryData.map(({image, title}) => (
            <Flex key={title} direction="column" alignItems="center" minW="10rem" minH="10rem">
              <Image src={image} w="300px" h="300px" objectFit="cover" alt="" />
            </Flex>
            ))}
        </Grid>
    </Flex>
  )
}

export default GallerySection