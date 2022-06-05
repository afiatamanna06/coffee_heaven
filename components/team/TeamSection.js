import { Box, Grid, Flex, Image, Heading, Center } from "@chakra-ui/react"
import Header from "../common/Header"
import teamData from "./TeamData"

function TeamSection() {
  return (
    <Flex as={Center} flexDir="column" py="16" px="4">
        <Header title="Our Team" color={["rgba(255, 255, 255, 1)"]} />
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} alignItems="center" maxW="80rem" mt="2" columnGap={["2"]} rowGap={["2"]}>
          {teamData.map(({image, title}) => (
            <Flex key={title} direction="column" alignItems="center" minW="10rem" minH="10rem" p="5" _hover={{ bg: "rgba(255, 255, 255, .075)", cursor: "pointer" }}>
              <Image src={image} mb="2" w="250px" h="250px" alt="" />
              <Heading textAlign="center" fontSize="xl" color={["white"]}>{title}</Heading>
            </Flex>
            ))}
        </Grid>
    </Flex>
  )
}

export default TeamSection