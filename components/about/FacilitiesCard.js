import { Box, Flex, Heading, Image } from '@chakra-ui/react'

function FacilitiesCard({image, title, description}) {
  return (
    <Flex direction="column" alignItems="center" maxW="15rem" minH="19rem" _hover={{ boxShadow: "lg", borderRadius: "lg", bg: "rgba(255, 255, 255, .05)", cursor: "pointer" }} p="4">
        <Image src={image} mb="4" w="100px" h="100px" alt="" />
        <Heading textAlign="center" mb="2" fontSize="xl" color={["rgba(255, 255, 255, 1)"]}>{title}</Heading>
        <Box textAlign="center" color={["rgba(255, 255, 255, 1)"]}>{description}</Box>
    </Flex>
  )
}

export default FacilitiesCard