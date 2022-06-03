import { Box, Flex, IconButton, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import navLinks from './NavigationLinks'
import { FiMenu } from "react-icons/fi"
import { useState } from 'react'

function NavigationBar() {

  const [responsiveDisplay, setResponsiveDisplay] = useState("none")
  return (
    <Flex justify="space-between" px={["4", "4", "4", "28", "40"]} py={["4"]} backdropFilter="blur(8px)" alignItems={["start", "start", "start", "center", "center"]} bg={["rgba(190, 156, 121, .1)", "rgba(190, 156, 121, .1)", "rgba(190, 156, 121, .1)", "rgba(190, 156, 121, .4)", "rgba(190, 156, 121, .4)"]} border="1px" borderColor="rgb(69, 51, 33)" position="fixed" zIndex={99} w="full" h={responsiveDisplay === "flex" ? ["100vh", "100vh", "100vh", "min-content", "min-content"] : "min-content"} direction={["column", "column", "column", "row", "row"]}>
        <Flex w="full" justify="space-between" alignItems="center">
          <Link href="/" passHref>
            <Image cursor="pointer" src="/logo.png" w="50px" h="50px" alt="" />
          </Link>
          <IconButton aria-label="" icon={<FiMenu />} variant="ghost" display={["flex", "flex", "flex", "none", "none"]} onClick={() => {responsiveDisplay === "none" ? setResponsiveDisplay("flex") : setResponsiveDisplay("none")}} />
        </Flex>
        <Flex alignItems={["start", "start", "start", "center", "center"]} display={[responsiveDisplay, responsiveDisplay, responsiveDisplay, "flex", "flex"]} direction={["column", "column", "column", "row", "row"]}>
            {navLinks.map(({name, path}) => (
                <Link key={name} href={path} passHref>
                    <Box ml={["0", "0", "0", "8", "8"]} fontFamily="'Merienda One', cursive" cursor="pointer" fontWeight={["normal", "normal", "normal", "bold", "bold"]} fontSize={["4xl", "4xl", "4xl", "lg", "lg"]} color="white" _hover={{ color: ["rgba(205, 179, 152, .5)", "rgba(205, 179, 152, .5)", "rgba(205, 179, 152, .5)", "rgba(69, 51, 33, 1)", "rgba(69, 51, 33, 1)"] }}>{name}</Box>
                </Link>
            ))}
        </Flex>
    </Flex>
  )
}

export default NavigationBar