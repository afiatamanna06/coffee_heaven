import { Box, Flex, Grid, Image, Heading, Button, Center } from '@chakra-ui/react'
import Link from 'next/link'

function AboutSection() {
  return (
    <Box as={Center} id="About" py="20" px="4" bg="rgba(255, 255, 255, .05)">
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} alignItems="center" maxW="80rem" columnGap={["20"]} rowGap={["8"]}>
            <Image src="/about-img.svg" alt="" />
            <Flex direction="column" alignItems={["start"]}>
                <Heading mb="6" textAlign={["start"]} fontFamily="'Merienda One', cursive" color={["white", "white", "white", "#333", "#333"]} fontSize={["2xl", "2xl", "2xl", "6xl", "6xl"]}>A Cup Of Coffee Can Complete Your Day</Heading>
                <Box mb="4" textAlign={["start"]} fontSize={["md", "md", "md", "lg", "lg"]} color={["white", "white", "white", "#333", "#333"]}>We believe a cup of coffee is one of the most important, simple pleasures in life. You can&apos;t imagine a day without a cup of coffee and we believe that your office and on-the-go coffee should never be a compromise.</Box>
                <Link href="#Menu">
                  <Button bg="rgba(190, 156, 121, 1)" color="white" w="8rem" borderRadius="none" _focus={{ outline: "none" }} _hover={{ bg: "rgba(190, 156, 121, .5)" }}>Our Menu</Button>
                </Link>
            </Flex>
        </Grid>
    </Box>
  )
}

export default AboutSection