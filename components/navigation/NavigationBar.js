import { Box, Flex, IconButton, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import navLinks from './NavigationLinks'
import { FiMenu } from "react-icons/fi"
import { useState } from 'react'

function NavigationBar() {

  const [responsiveDisplay, setResponsiveDisplay] = useState("none")
  return (
    <Flex justify="space-between" px={["4", "4", "4", "28", "40"]} py={["4"]} alignItems={["start", "start", "start", "center", "center"]} bg="rgba(255, 242, 230, .12)" border="1px" borderColor="#BE9C79" position="fixed" w="full" h={responsiveDisplay === "flex" ? ["100vh", "100vh", "100vh", "min-content", "min-content"] : "min-content"} direction={["column", "column", "column", "row", "row"]}>
        <Flex w="full" justify="space-between" alignItems="center">
          <Image src="/logo.png" w="50px" h="50px" alt="" />
          <IconButton aria-label="" icon={<FiMenu />} variant="ghost" display={["flex", "flex", "flex", "none", "none"]} onClick={() => {responsiveDisplay === "none" ? setResponsiveDisplay("flex") : setResponsiveDisplay("none")}} />
        </Flex>
        <Flex alignItems={["start", "start", "start", "center", "center"]} display={[responsiveDisplay, responsiveDisplay, responsiveDisplay, "flex", "flex"]} direction={["column", "column", "column", "row", "row"]}>
            {navLinks.map(({name, path}) => (
                <Link key={name} href={path} passHref>
                    <Box ml={["0", "0", "0", "8", "8"]} cursor="pointer" fontWeight={["normal", "normal", "normal", "bold", "bold"]} fontSize={["4xl", "4xl", "4xl", "lg", "lg"]} color="white" _hover={{ color: "#BE9C79" }}>{name}</Box>
                </Link>
            ))}
        </Flex>
    </Flex>
  )
}

export default NavigationBar