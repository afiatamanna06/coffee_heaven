import { Box, Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import navLinks from './NavigationLinks'

function NavigationBar() {
  return (
    <Flex justify="space-between" px={["24"]} py={["4"]} alignItems="center" bg="rgba(255, 242, 230, .12)" border="1px" borderColor="#BE9C79" position="fixed" w="full">
        <Image src="/logo.png" w="50px" h="50px" alt="" />
        <Flex>
            {navLinks.map(({name, path}) => (
                <Link key={name} href={path} passHref>
                    <Box ml={["8"]} cursor="pointer" fontWeight="bold" fontSize="lg" color="white" _hover={{ color: "#BE9C79" }}>{name}</Box>
                </Link>
            ))}
        </Flex>
    </Flex>
  )
}

export default NavigationBar