import SuggestedUsers from '../../cp/SuggestedUsers/SuggestedUsers'
import FeedPosts from '../..//cp/FeedPosts/FeedPosts'
import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10} border={"1px solid blue"}>
        <FeedPosts/>
        </Box>

        <Box flex={3} mr={20} display={{base:"none", lg:"block"}}
            maxW={"300px"} border={"1px solid red"}>
          <SuggestedUsers/>
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage
