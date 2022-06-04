import { Box, Flex, Heading, Image } from '@chakra-ui/react'

function Header({title}) {
  return (
    <Flex alignItems="center" direction="column">
        <Image src="/heading-img.png" alt="" />
        <Heading mb="6" textAlign="center" fontFamily="'Merienda One', cursive" color={["rgba(255, 255, 255, .5)"]} fontSize={["2xl", "2xl", "2xl", "3xl", "3xl"]}>{title}</Heading>
    </Flex>
  )
}

export default Header