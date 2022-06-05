import { Flex, Center, Grid, Image } from '@chakra-ui/react'
import Header from '../common/Header'
import galleryData from './GalleryData'

function GallerySection() {
  return (
    <Flex as={Center} flexDir="column" pb="40" pt="28" px="4" id="Gallery">
        <Header title="Our Gallery" color={["rgba(255, 255, 255, 1)"]} />
        <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} alignItems="center" maxW="80rem" mt="2" columnGap={["3"]} rowGap={["3"]}>
          {galleryData.map(({image, title}) => (
            <Flex key={title} direction="column" alignItems="center" maxW={["10rem", "10rem", "10rem", "20rem", "20rem"]} maxH={["10rem", "10rem", "10rem", "20rem", "20rem"]}>
              <Image src={image} w="300px" h="300px" objectFit="cover" alt="" />
            </Flex>
            ))}
        </Grid>
    </Flex>
  )
}

export default GallerySection