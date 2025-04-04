import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.500"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>
        
        <SuggestedUser name={'Dan Abrahmov'} followers={1392} avatar={'https://bit.ly/dan-abramov'}/>
        <SuggestedUser name={'ryan florence'} followers={567} avatar={'https://bit.ly/ryan-florence'}/>
        <SuggestedUser name={'christian nwamba'} followers={759} avatar={'https://bit.ly/code-beast'}/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            © 2025 Built by{" "}
            <Link color={'blue.500'} fontSize={14}> As a programmer </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers
