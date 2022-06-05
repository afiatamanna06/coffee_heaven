import { Box, Grid, Flex, Image, Heading, Center } from "@chakra-ui/react"
import Header from "../common/Header"
import teamData from "./TeamData"

function TeamSection() {
  return (
    <Flex as={Center} flexDir="column" pb="40" pt="28" px="4" id="Team">
        <Header title="Our Team" color={["rgba(255, 255, 255, 1)"]} />
        <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} alignItems="center" maxW="80rem" mt="2" columnGap={["2"]} rowGap={["2"]}>
          {teamData.map(({image, title}) => (
            <Flex key={title} direction="column" alignItems="center" maxW={["15rem", "15rem", "15rem", "20rem", "20rem"]} maxH={["15rem", "15rem", "15rem", "20rem", "20rem"]} p="5" _hover={{ bg: "rgba(0, 0, 0, .1)", cursor: "pointer" }}>
              <Image src={image} mb="2" w="250px" h="250px" objectFit="cover" alt="" />
              <Heading textAlign="center" fontSize="xl" color={["white"]}>{title}</Heading>
            </Flex>
            ))}
        </Grid>
    </Flex>
  )
}

export default TeamSection