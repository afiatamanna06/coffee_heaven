import { Box, Flex, Heading, Image } from '@chakra-ui/react'

function Header({title}) {
  return (
    <Flex alignItems="center" direction="column">
        <Image src="/heading-img.png" w="250px" mb="6" alt="" />
        <Heading mb="6" textAlign="center" fontFamily="'Merienda One', cursive" color={["rgba(255, 255, 255, 1)"]} fontSize={["2xl", "2xl", "2xl", "4xl", "4xl"]}>{title}</Heading>
    </Flex>
  )
}

export default Header