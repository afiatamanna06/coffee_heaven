import { Box, Grid, Center } from '@chakra-ui/react'
import Header from '../common/Header'
import FacilitiesCard from './FacilitiesCard'
import facilitiesData from './FacilitiesData'

function FacilitiesSection() {
  return (
    <Box as={Center} display="flex" flexDir="column" py="16" px="4">
        <Header title="Our Facility" color={["rgba(255, 255, 255, 1)"]} />
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"]} alignItems="center" maxW="80rem" mt="90" columnGap={["20"]} rowGap={["20"]}>
            {facilitiesData.map(({image, title, description}) => (
                <FacilitiesCard key={title} image={image} title={title} description={description} />
            ))}
        </Grid>
    </Box>
  )
}

export default FacilitiesSection