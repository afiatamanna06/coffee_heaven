import { Box, Flex, Grid, Image, Center, Input, Button } from '@chakra-ui/react'
import Header from '../common/Header'

function ContactSection() {
  return (
    <Box display="flex" flexDir="column" alignItems="center" py="16" px="4" id="Contact">
        <Header title="Contact Us" color={["rgba(255, 255, 255, 1)"]} />
        <Flex alignItems="center" direction={["column", "column", "column", "row", "row"]}>
            <Image flex="1" src="/contact-img.svg" w="700px" h="700px" alt="" />
            <Flex flex="1" direction="column" alignItems="center" border="2px" borderColor="white" p="6">
                <Box fontSize={["xl", "xl", "xl", "2xl", "2xl"]} mb="6">Book A Table</Box>
                <Input mb="6" size="lg" borderRadius="none" border="2px" borderColor="white" color="white" w={["20rem","20rem","25rem","25rem"]} placeholder="Enter Your Name" _placeholder={{ color: "gray.400" }} _hover={{ border: "2px", borderColor: "white" }} _focus={{ outline: "none" }} _active={{ outline: "none" }}></Input>
                <Input mb="6" size="lg" borderRadius="none" border="2px" borderColor="white" color="white" w={["20rem","20rem","25rem","25rem"]} placeholder="Enter Your Number" _placeholder={{ color: "gray.400" }} _hover={{ border: "2px", borderColor: "white" }} _focus={{ outline: "none" }} _active={{ outline: "none" }}></Input>
                <Input mb="6" size="lg" borderRadius="none" border="2px" borderColor="white" color="white" w={["20rem","20rem","25rem","25rem"]} placeholder="How Many Guests" _placeholder={{ color: "gray.400" }} _hover={{ border: "2px", borderColor: "white" }} _focus={{ outline: "none" }} _active={{ outline: "none" }}></Input>
                <Button px={8} py={4} color="white" borderRadius="none" fontWeight="normal" bg="rgba(190, 156, 121, 1)" _hover={{ bg: "rgb(238, 230, 221)", borderColor: "rgb(238, 230, 221)", color: "rgb(119, 91, 60)" }} _active={{ bg: "rgb(238, 230, 221)", borderColor: "rgb(238, 230, 221)", color: "rgb(119, 91, 60)" }} _focus={{ bg: "rgb(238, 230, 221)", borderColor: "rgb(238, 230, 221)", color: "rgb(119, 91, 60)", outline: "none" }}>Send Message</Button>
            </Flex>
        </Flex>
    </Box>
  )
}

export default ContactSection