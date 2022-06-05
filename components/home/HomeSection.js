import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import Link from 'next/link'

function HomeSection() {
  return (
    <Box id="Home" position="relative" py={["10rem", "10rem", "10rem", "0", "0"]}>
        <Image position={["relative", "relative", "relative", "absolute", "absolute"]} zIndex="-1" src="/home-bg.jpg" alt="" w="full" maxHeight="100vh" objectFit="cover" />
        <Flex direction="column" alignItems="center" mt={["10", "10", "10", "0", "0"]} maxW="50rem" position="relative" py={["0", "0", "0", "39.9vh", "39.9vh"]} px="12">
            <Heading textAlign="center" mb="2" fontFamily="'Merienda One', cursive" color={["#333"]} fontSize={["6xl"]}>Coffee Heaven</Heading>
            <Box textAlign="center" mb="4" fontSize={["lg"]} color={["#333"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut officia, accusantium mollitia laudantium dolorum dolore.</Box>
            <Link href="#About">
              <Button bg="rgba(190, 156, 121, 1)" color="white" w="8rem" borderRadius="none" _focus={{ outline: "none" }} _hover={{ bg: "rgba(190, 156, 121, .5)" }}>About Us</Button>
            </Link>
        </Flex>
    </Box>
  )
}

export default HomeSection