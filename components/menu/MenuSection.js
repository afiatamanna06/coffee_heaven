import { Box, Flex, Image, Heading } from '@chakra-ui/react'
import Header from '../common/Header'
import menuData from './MenuData'

function MenuSection() {
  return (
    <Box py="20" id="Menu">
        <Header title="Popular Menu" color={["#333"]} />
        <Flex
            mt="10"
            pb="10"
            overflowX="scroll" 
            sx={{
            '&::-webkit-scrollbar': {
                backgroundColor: `rgba(0, 0, 0, 0)`,
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: `rgba(0, 0, 0, 0)`,
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            }}>
                {menuData.map(({image, title}) => (
                    <Flex key={title} direction="column" alignItems="center" minW="20rem" minH="20rem" p="10" columnGap={6} _hover={{ boxShadow: "lg", rounded: "100%", bg: "rgba(0, 0, 0, .085)", cursor: "pointer" }}>
                        <Image src={image} mb="2" w="250px" h="250px" alt="" />
                        <Heading textAlign="center" fontSize="xl" color={["#333"]}>{title}</Heading>
                    </Flex>
                ))}
        </Flex>
    </Box>
  )
}

export default MenuSection